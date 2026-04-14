import { Router } from 'express'

import express from "express";
import crypto from "crypto";
import { Preference, Payment } from "mercadopago";
import mpClient from "../config/mercadopago.js";
import { prisma } from "../config/prisma.js"; // ajusta al path real de tu prisma client

const router = express.Router();

// ─────────────────────────────────────────
// POST /api/payments/create-preference
// Crea la preferencia de pago y devuelve la URL de checkout
// ─────────────────────────────────────────
router.post("/create-preference", async (req, res) => {
  try {
    const { orderId, items, payer } = req.body;

    // Validaciones básicas de seguridad
    if (!orderId || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Datos de orden inválidos" });
    }

    if (!payer?.email) {
      return res.status(400).json({ error: "Email del comprador requerido" });
    }

    // Verificar que la orden existe en tu DB y pertenece al usuario
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { items: { include: { product: true } } },
    });

    if (!order) {
      return res.status(404).json({ error: "Orden no encontrada" });
    }

    if (order.status !== "PENDING") {
      return res.status(400).json({ error: "Esta orden ya fue procesada" });
    }

    // Construir items desde la DB (no desde el cliente — seguridad)
    const mpItems = order.items.map((item) => ({
      id: item.productId.toString(),
      title: item.product.name,
      quantity: item.quantity,
      unit_price: parseFloat(item.product.price),
      currency_id: "COP",
      picture_url: item.product.imageUrl || undefined,
    }));

    const preference = new Preference(mpClient);

    const preferenceData = {
      items: mpItems,
      payer: {
        email: payer.email,
        name: payer.name || "",
      },
      back_urls: {
        success: `${process.env.FRONTEND_URL}/checkout/success`,
        failure: `${process.env.FRONTEND_URL}/checkout/failure`,
        pending: `${process.env.FRONTEND_URL}/checkout/pending`,
      },
      auto_return: "approved",
      external_reference: orderId.toString(),
      notification_url: `${process.env.BACKEND_URL}/api/payments/webhook`,
      statement_descriptor: "KAES STORE",
      expires: true,
      expiration_date_to: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // expira en 30 min
    };

    const result = await preference.create({ body: preferenceData });

    // Guardar el preference ID en la orden
    await prisma.order.update({
      where: { id: orderId },
      data: { mpPreferenceId: result.id },
    });

    return res.json({
      preferenceId: result.id,
      initPoint: result.init_point,         // URL producción
      sandboxInitPoint: result.sandbox_init_point, // URL sandbox (pruebas)
    });
  } catch (error) {
    console.error("Error creando preferencia MP:", error);
    return res.status(500).json({ error: "Error procesando el pago" });
  }
});

// ─────────────────────────────────────────
// POST /api/payments/webhook
// MercadoPago notifica aquí el resultado del pago
// ─────────────────────────────────────────
router.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  try {
    // 1. Verificar firma del webhook (seguridad anti-spoofing)
    const xSignature = req.headers["x-signature"];
    const xRequestId = req.headers["x-request-id"];

    if (!xSignature || !xRequestId) {
      console.warn("Webhook recibido sin firma");
      return res.status(401).json({ error: "Firma requerida" });
    }

    // Parsear la firma de MP: "ts=...,v1=..."
    const parts = xSignature.split(",");
    const ts = parts.find((p) => p.startsWith("ts="))?.split("=")[1];
    const v1 = parts.find((p) => p.startsWith("v1="))?.split("=")[1];

    if (!ts || !v1) {
      return res.status(401).json({ error: "Formato de firma inválido" });
    }

    // Construir el string a firmar según docs de MP
    const body = typeof req.body === "string" ? req.body : JSON.stringify(req.body);
    const queryId = req.query.id || "";
    const manifest = `id:${queryId};request-id:${xRequestId};ts:${ts};`;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.MP_WEBHOOK_SECRET)
      .update(manifest)
      .digest("hex");

    if (expectedSignature !== v1) {
      console.warn("Firma de webhook inválida");
      return res.status(401).json({ error: "Firma inválida" });
    }

    // 2. Procesar la notificación
    const notification = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // MP solo nos interesa el evento "payment"
    if (notification.type !== "payment") {
      return res.sendStatus(200);
    }

    const paymentId = notification.data?.id;
    if (!paymentId) {
      return res.sendStatus(200);
    }

    // 3. Consultar el pago directamente a la API de MP (no confiar en el body del webhook)
    const paymentApi = new Payment(mpClient);
    const payment = await paymentApi.get({ id: paymentId });

    const orderId = payment.external_reference;
    const status = payment.status; // "approved", "rejected", "pending", etc.

    if (!orderId) {
      return res.sendStatus(200);
    }

    // 4. Actualizar el estado de la orden en tu DB
    let newOrderStatus;
    switch (status) {
      case "approved":
        newOrderStatus = "PAID";
        break;
      case "rejected":
        newOrderStatus = "FAILED";
        break;
      case "pending":
      case "in_process":
        newOrderStatus = "PENDING_PAYMENT";
        break;
      default:
        newOrderStatus = "PENDING";
    }

    await prisma.order.update({
      where: { id: parseInt(orderId) },
      data: {
        status: newOrderStatus,
        mpPaymentId: paymentId.toString(),
        paidAt: status === "approved" ? new Date() : null,
      },
    });

    console.log(`✅ Orden ${orderId} actualizada a: ${newOrderStatus}`);

    // MP requiere 200 o reintenta por hasta 4 días
    return res.sendStatus(200);
  } catch (error) {
    console.error("Error procesando webhook:", error);
    // Retornar 200 igual para que MP no reintente indefinidamente en errores nuestros
    return res.sendStatus(200);
  }
});

// ─────────────────────────────────────────
// GET /api/payments/status/:orderId
// El frontend consulta si ya se aprobó el pago
// ─────────────────────────────────────────
router.get("/status/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await prisma.order.findUnique({
      where: { id: parseInt(orderId) },
      select: {
        id: true,
        status: true,
        mpPaymentId: true,
        total: true,
      },
    });

    if (!order) {
      return res.status(404).json({ error: "Orden no encontrada" });
    }

    return res.json(order);
  } catch (error) {
    console.error("Error consultando estado:", error);
    return res.status(500).json({ error: "Error consultando el pago" });
  }
});

export default router;