import { Router } from 'express'
import multer from 'multer'
import { getProducts, getProductBySlug, createProduct, updateProduct, deleteProduct, getCategories, createCategory } from '../controllers/product.controller.js'
import { isAuth, isAdmin } from '../middleware/auth.middleware.js'
import { validate } from '../middleware/validate.js'
import { createProduct as createProductValidator, updateProduct as updateProductValidator, deleteProduct as deleteProductValidator, createCategory as createCategoryValidator } from '../validators/product.validator.js'

const router = Router()

// Multer guarda los archivos temporalmente en /tmp antes de subirlos a Cloudinary
const upload = multer({ dest: '/tmp/uploads/' })

// Rutas públicas — cualquiera puede ver productos sin login
router.get('/',              getProducts)
router.get('/categories',    getCategories)
router.get('/:slug',         getProductBySlug)

// Rutas protegidas — solo admin
router.post('/',             createProductValidator, validate, isAuth, isAdmin, upload.array('images', 10), createProduct)
router.put('/:id',           updateProductValidator, validate, isAuth, isAdmin, upload.array('images', 10), updateProduct)
router.delete('/:id',        deleteProductValidator, validate, isAuth, isAdmin, deleteProduct)
router.post('/categories',   createCategoryValidator, validate, isAuth, isAdmin, createCategory)

export default router