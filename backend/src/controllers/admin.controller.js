import * as AdminService from '../services/admin.service.js'

export const getAllOrders = async (req, res, next) => {
  try {
    const result = await AdminService.getAllOrders(req.query)
    res.json(result)
  } catch (err) { next(err) }
}

export const updateOrderStatus = async (req, res, next) => {
  try {
    const order = await AdminService.updateOrderStatus(req.params.id, req.body.status)
    res.json(order)
  } catch (err) { next(err) }
}

export const createDiscount = async (req, res, next) => {
  try {
    const discount = await AdminService.createDiscount(req.body)
    res.status(201).json(discount)
  } catch (err) { next(err) }
}

export const createCoupon = async (req, res, next) => {
  try {
    const coupon = await AdminService.createCoupon(req.body)
    res.status(201).json(coupon)
  } catch (err) { next(err) }
}

export const getCoupons = async (req, res, next) => {
  try {
    const coupons = await AdminService.getCoupons()
    res.json(coupons)
  } catch (err) { next(err) }
}

export const getDiscounts = async (req, res, next) => {
  try {
    const discounts = await AdminService.getDiscounts()
    res.json(discounts)
  } catch (err) { next(err) }
}

export const getDashboardStats = async (req, res, next) => {
  try {
    const stats = await AdminService.getDashboardStats()
    res.json(stats)
  } catch (err) { next(err) }
}