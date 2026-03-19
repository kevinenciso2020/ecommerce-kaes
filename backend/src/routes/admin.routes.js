import { Router } from 'express'
import { getAllOrders, updateOrderStatus, createDiscount, createCoupon, getCoupons, getDiscounts, getDashboardStats } from '../controllers/admin.controller.js'
import { isAuth, isAdmin } from '../middleware/auth.middleware.js'

const router = Router()

// Todas las rutas de admin requieren autenticación y rol de administrador
router.use(isAuth, isAdmin)

router.get('/stats',              getDashboardStats)
router.get('/orders',             getAllOrders)
router.put('/orders/:id/status',  updateOrderStatus)
router.get('/discounts',          getDiscounts)
router.post('/discounts',         createDiscount)
router.get('/coupons',            getCoupons)
router.post('/coupons',           createCoupon)

export default router