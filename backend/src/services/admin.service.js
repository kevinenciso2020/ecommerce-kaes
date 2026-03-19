import { prisma } from '../config/prisma.js'

export const getAllOrders = async ({ page = 1, limit = 20, status }) => {
  const where = status ? { status } : {}
  const skip  = (page - 1) * limit

  const [orders, total] = await Promise.all([
    prisma.order.findMany({
      where,
      skip,
      take:    Number(limit),
      include: { user: { select: { name: true, email: true } }, payment: true },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.order.count({ where })
  ])

  return { orders, total, page: Number(page), totalPages: Math.ceil(total / limit) }
}

export const updateOrderStatus = async (orderId, status) => {
  return prisma.order.update({ where: { id: orderId }, data: { status } })
}

export const createDiscount = async ({ name, type, value, startsAt, endsAt, productIds }) => {
  const discount = await prisma.discount.create({
    data: {
      name,
      type,
      value:    parseFloat(value),
      startsAt: startsAt ? new Date(startsAt) : null,
      endsAt:   endsAt   ? new Date(endsAt)   : null,
    }
  })

  // Asociar el descuento a los productos seleccionados
  if (productIds && productIds.length > 0) {
    await prisma.productDiscount.createMany({
      data: productIds.map(productId => ({ productId, discountId: discount.id }))
    })
  }

  return discount
}

export const createCoupon = async (data) => {
  return prisma.coupon.create({
    data: {
      code:        data.code.toUpperCase(),
      type:        data.type,
      value:       parseFloat(data.value),
      minPurchase: data.minPurchase ? parseFloat(data.minPurchase) : null,
      maxUses:     data.maxUses     ? parseInt(data.maxUses)       : null,
      startsAt:    data.startsAt    ? new Date(data.startsAt)      : null,
      endsAt:      data.endsAt      ? new Date(data.endsAt)        : null,
    }
  })
}

export const getCoupons = async () => {
  return prisma.coupon.findMany({ orderBy: { createdAt: 'desc' } })
}

export const getDiscounts = async () => {
  return prisma.discount.findMany({
    include: { products: { include: { product: { select: { name: true } } } } },
    orderBy: { createdAt: 'desc' }
  })
}

export const getDashboardStats = async () => {
  const [totalUsers, totalProducts, totalOrders, revenue] = await Promise.all([
    prisma.user.count({ where: { role: 'CUSTOMER' } }),
    prisma.product.count({ where: { isActive: true } }),
    prisma.order.count(),
    prisma.order.aggregate({
      _sum:   { total: true },
      where:  { status: { in: ['CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED'] } }
    })
  ])

  return {
    totalUsers,
    totalProducts,
    totalOrders,
    revenue: revenue._sum.total || 0,
  }
}