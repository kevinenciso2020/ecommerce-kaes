import { Router } from 'express'
import { createOrder, getOrders, getOrderById } from '../controllers/order.controller.js'
import { isAuth } from '../middleware/auth.middleware.js'

const router = Router()

router.use(isAuth)

router.post('/',     createOrder)
router.get('/',      getOrders)
router.get('/:id',   getOrderById)

export default router