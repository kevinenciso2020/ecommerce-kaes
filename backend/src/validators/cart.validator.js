import { body, param } from 'express-validator'

export const addToCart = [
  body('productId')
    .notEmpty().withMessage('El ID del producto es requerido')
    .isInt({ min: 1 }).withMessage('El ID del producto debe ser válido'),
  body('quantity')
    .notEmpty().withMessage('La cantidad es requerida')
    .isInt({ min: 1 }).withMessage('La cantidad debe ser al menos 1'),
  body('size')
    .optional()
    .trim()
    .escape()
    .isLength({ max: 20 }).withMessage('La talla no puede superar los 20 caracteres'),
  body('color')
    .optional()
    .trim()
    .escape()
    .isLength({ max: 30 }).withMessage('El color no puede superar los 30 caracteres')
]

export const updateCartItem = [
  param('itemId')
    .notEmpty().withMessage('El ID del ítem es requerido')
    .isInt({ min: 1 }).withMessage('El ID debe ser un número entero positivo'),
  body('quantity')
    .notEmpty().withMessage('La cantidad es requerida')
    .isInt({ min: 1, max: 999 }).withMessage('La cantidad debe estar entre 1 y 999')
]

export const removeFromCart = [
  param('itemId')
    .notEmpty().withMessage('El ID del ítem es requerido')
    .isInt({ min: 1 }).withMessage('El ID debe ser un número entero positivo')
]
