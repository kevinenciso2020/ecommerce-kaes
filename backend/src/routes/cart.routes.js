import { Router } from 'express'
import { getCart, addToCart, updateCartItem, removeFromCart, clearCart } from '../controllers/cart.controller.js'
import { isAuth } from '../middleware/auth.middleware.js'

const router = Router()

// Todas las rutas del carrito requieren estar autenticado
router.use(isAuth)

router.get('/',                   getCart)
router.post('/',                  addToCart)
router.put('/:itemId',            updateCartItem)
router.delete('/:itemId',         removeFromCart)
router.delete('/',                clearCart)

export default router