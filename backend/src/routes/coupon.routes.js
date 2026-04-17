import { Router } from 'express'
import { validateCoupon } from '../services/coupon.service.js'

const router = Router()

router.get('/:code', async (req, res, next) => {
  try {
    const { code } = req.params
    const subtotal = parseFloat(req.query.subtotal) || 0

    const result = await validateCoupon(code, subtotal)

    if (!result.valid) {
      return res.status(400).json({ error: result.error })
    }

    res.json(result.coupon)
  } catch (error) {
    next(error)
  }
})

export default router