import * as CartService from '../services/cart.service.js'

export const getCart = async (req, res, next) => {
  try {
    const cart = await CartService.getCart(req.user.id)
    res.json(cart)
  } catch (err) { next(err) }
}

export const addToCart = async (req, res, next) => {
  try {
    const item = await CartService.addToCart(req.user.id, req.body)
    res.status(201).json(item)
  } catch (err) { next(err) }
}

export const updateCartItem = async (req, res, next) => {
  try {
    const result = await CartService.updateCartItem(req.user.id, req.params.itemId, req.body.quantity)
    res.json(result)
  } catch (err) { next(err) }
}

export const removeFromCart = async (req, res, next) => {
  try {
    const result = await CartService.removeFromCart(req.user.id, req.params.itemId)
    res.json(result)
  } catch (err) { next(err) }
}

export const clearCart = async (req, res, next) => {
  try {
    const result = await CartService.clearCart(req.user.id)
    res.json(result)
  } catch (err) { next(err) }
}