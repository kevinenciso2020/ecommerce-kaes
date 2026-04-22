"use client";
import { motion } from "framer-motion";
import { MagneticButton } from "../motion/MagneticButton";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <p className="cta-eyebrow">Primera compra</p>
          <h2 className="cta-title">
            Tu estilo te espera
          </h2>
          <p className="cta-text">
            Usa el cup&oacute;n <strong>BIENVENIDO10</strong> y obt&eacute;n 10% de descuento en tu primera orden.
          </p>
          <MagneticButton
            onClick={() => window.location.href = "/auth/register"}
            className="btn cta-btn"
          >
            Crear cuenta gratis
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}