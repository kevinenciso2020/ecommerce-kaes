import { body, param, query } from 'express-validator'

export const getProducts = [
  query('page')
    .optional()
    .isInt({ min: 1 }).withMessage('La página debe ser un número entero positivo'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 }).withMessage('El límite debe estar entre 1 y 100'),
  query('minPrice')
    .optional()
    .isFloat({ min: 0 }).withMessage('El precio mínimo debe ser un número positivo'),
  query('maxPrice')
    .optional()
    .isFloat({ min: 0 }).withMessage('El precio máximo debe ser un número positivo'),
  query('search')
    .optional()
    .trim()
    .escape()
    .isLength({ max: 200 }).withMessage('La búsqueda no puede superar los 200 caracteres'),
  query('category')
    .optional()
    .trim()
    .escape()
    .isLength({ max: 100 }).withMessage('La categoría no puede superar los 100 caracteres'),
  query('size')
    .optional()
    .trim()
    .escape()
    .isLength({ max: 20 }).withMessage('La talla no puede superar los 20 caracteres'),
  query('color')
    .optional()
    .trim()
    .escape()
    .isLength({ max: 30 }).withMessage('El color no puede superar los 30 caracteres')
]

export const getProductBySlug = [
  param('slug')
    .trim()
    .notEmpty().withMessage('El slug del producto es requerido')
    .isLength({ max: 200 }).withMessage('El slug no puede superar los 200 caracteres')
    .escape()
]

export const getProductById = [
  param('id')
    .notEmpty().withMessage('El ID del producto es requerido')
    .isInt({ min: 1 }).withMessage('El ID debe ser un número entero positivo')
]

export const createProduct = [
  body('name')
    .trim()
    .notEmpty().withMessage('El nombre del producto es requerido')
    .isLength({ min: 2, max: 200 }).withMessage('El nombre debe tener entre 2 y 200 caracteres')
    .escape(),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 5000 }).withMessage('La descripción no puede superar los 5000 caracteres')
    .escape(),
  body('price')
    .notEmpty().withMessage('El precio es requerido')
    .isFloat({ min: 0 }).withMessage('El precio debe ser un número positivo'),
  body('stock')
    .optional()
    .isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),
  // FIX: categoryId y categorySlug son ambos opcionales individualmente,
  // pero se valida que al menos uno esté presente mediante el custom validator.
  // El frontend manda categorySlug; si alguien usa la API directamente puede mandar categoryId.
  body('categoryId')
    .optional()
    .isString().withMessage('El ID de categoría debe ser válido'),
  body('categorySlug')
    .optional()
    .isString().withMessage('El slug de categoría debe ser válido'),
  body('categoryId').custom((value, { req }) => {
    if (!value && !req.body.categorySlug) {
      throw new Error('La categoría es requerida (categoryId o categorySlug)')
    }
    return true
  }),
  // FIX: isFeatured viene como string 'true'/'false' desde FormData,
  // isBoolean() estricto rechaza strings. Se acepta como string también.
  body('isFeatured')
    .optional()
    .custom((value) => {
      if (value !== undefined && value !== 'true' && value !== 'false' && typeof value !== 'boolean') {
        throw new Error('isFeatured debe ser un valor booleano')
      }
      return true
    }),
  body('imageUrls')
    .optional()
    .isString().withMessage('Las URLs de imagen deben ser un string JSON serializado'),
  body('variants')
    .optional()
    .isArray().withMessage('Las variantes deben ser un array')
]

export const updateProduct = [
  param('id')
    .notEmpty().withMessage('El ID del producto es requerido')
    .isString().withMessage('El ID debe ser un texto válido'),
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 200 }).withMessage('El nombre debe tener entre 2 y 200 caracteres')
    .escape(),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 5000 }).withMessage('La descripción no puede superar los 5000 caracteres')
    .escape(),
  body('price')
    .optional()
    .isFloat({ min: 0 }).withMessage('El precio debe ser un número positivo'),
  body('stock')
    .optional()
    .isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),
  body('categoryId')
    .optional()
    .isString().withMessage('El ID de categoría debe ser válido'),
  body('categorySlug')
    .optional()
    .isString().withMessage('El slug de categoría debe ser válido'),
  body('isActive')
    .optional()
    // FIX: mismo problema que isFeatured — FormData manda strings
    .custom((value) => {
      if (value !== undefined && value !== 'true' && value !== 'false' && typeof value !== 'boolean') {
        throw new Error('isActive debe ser un valor booleano')
      }
      return true
    }),
  body('isFeatured')
    .optional()
    .custom((value) => {
      if (value !== undefined && value !== 'true' && value !== 'false' && typeof value !== 'boolean') {
        throw new Error('isFeatured debe ser un valor booleano')
      }
      return true
    }),
  body('imageUrls')
    .optional()
    .isString().withMessage('Las URLs de imagen deben ser un string JSON serializado'),
  body('variants')
    .optional()
    .isArray().withMessage('Las variantes deben ser un array')
]

export const deleteProduct = [
  param('id')
    .notEmpty().withMessage('El ID del producto es requerido')
    .isString().withMessage('El ID debe ser un texto válido')
]

export const createCategory = [
  body('name')
    .trim()
    .notEmpty().withMessage('El nombre de la categoría es requerido')
    .isLength({ min: 2, max: 100 }).withMessage('El nombre debe tener entre 2 y 100 caracteres')
    .escape(),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage('La descripción no puede superar los 500 caracteres')
    .escape()
]