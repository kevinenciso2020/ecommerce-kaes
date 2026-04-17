import { prisma } from '../config/prisma.js'

export const validateCoupon = async (code, subtotal = 0) => {
  const coupon = await prisma.coupon.findUnique({
    where: { code: code.toUpperCase() },
  })

  if (!coupon) {
    return { valid: false, error: 'Cupón no válido' }
  }

  if (!coupon.isActive) {
    return { valid: false, error: 'Cupón expirado o inactivo' }
  }

  if (coupon.maxUses && coupon.usedCount >= coupon.maxUses) {
    return { valid: false, error: 'Cupón alcanzado en límite de usos' }
  }

  if (coupon.minPurchase && subtotal < parseFloat(coupon.minPurchase)) {
    return {
      valid: false,
      error: ` mínimo de $${Number(coupon.minPurchase).toLocaleString('es-CO')} para aplicar este cupón`,
    }
  }

  const discount =
    coupon.type === 'PERCENTAGE'
      ? subtotal * (parseFloat(coupon.value) / 100)
      : parseFloat(coupon.value)

  return {
    valid: true,
    coupon: {
      code: coupon.code,
      type: coupon.type,
      value: coupon.value,
      discount: Math.min(discount, subtotal),
    },
  }
}