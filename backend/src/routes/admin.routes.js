import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { getAllOrders, updateOrderStatus, createDiscount, createCoupon, getCoupons, getDiscounts, getDashboardStats } from '../controllers/admin.controller.js'
import { isAuth, isAdmin } from '../middleware/auth.middleware.js'

const router = Router()

// Rate limiting específico para admin - más restrictivo que el global
// Máximo 30 peticiones por 15 minutos por IP
const adminRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  message: { error: 'Demasiadas peticiones de admin, intenta más tarde' },
  standardHeaders: true,
  legacyHeaders: false,
})

// Middleware de logging para acciones administrativas
const adminActionLogger = (req, res, next) => {
  const timestamp = new Date().toISOString()
  console.log(`[ADMIN ACTION] ${timestamp} | User: ${req.user?.id || 'unknown'} | IP: ${req.ip || req.connection.remoteAddress} | Method: ${req.method} | Path: ${req.originalUrl}`)
  next()
}

// Todas las rutas de admin requieren: rate limit + auth + rol admin + logging
router.use(adminRateLimiter, isAuth, isAdmin, adminActionLogger)

router.get('/stats',              getDashboardStats)
router.get('/orders',             getAllOrders)
router.put('/orders/:id/status',  updateOrderStatus)
router.get('/discounts',          getDiscounts)
router.post('/discounts',         createDiscount)
router.get('/coupons',            getCoupons)
router.post('/coupons',           createCoupon)

export default router