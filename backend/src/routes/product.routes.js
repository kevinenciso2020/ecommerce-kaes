import { Router } from 'express'
import multer from 'multer'
import { getProducts, getProductBySlug, createProduct, updateProduct, deleteProduct, getCategories, createCategory } from '../controllers/product.controller.js'
import { isAuth, isAdmin } from '../middleware/auth.middleware.js'

const router = Router()

// Multer guarda los archivos temporalmente en /tmp antes de subirlos a Cloudinary
const upload = multer({ dest: '/tmp/uploads/' })

// Rutas públicas — cualquiera puede ver productos sin login
router.get('/',              getProducts)
router.get('/categories',    getCategories)
router.get('/:slug',         getProductBySlug)

// Rutas protegidas — solo admin
router.post('/',             isAuth, isAdmin, upload.array('images', 10), createProduct)
router.put('/:id',           isAuth, isAdmin, upload.array('images', 10), updateProduct)
router.delete('/:id',        isAuth, isAdmin, deleteProduct)
router.post('/categories',   isAuth, isAdmin, createCategory)

export default router