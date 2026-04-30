import { atom } from 'nanostores'

const COUPON_STORAGE_KEY = 'appliedCoupon'

export const appliedCoupon = atom(null)

const DEFAULT_EXPIRY_DAYS = 30

const isBrowser = typeof window !== 'undefined'

const saveToLocalStorage = (coupon) => {
  if (isBrowser && coupon) {
    localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(coupon))
  }
}

const loadFromLocalStorage = () => {
  if (!isBrowser) return null

  const stored = localStorage.getItem(COUPON_STORAGE_KEY)
  if (!stored) return null

  try {
    const coupon = JSON.parse(stored)

    if (coupon.expiresAt && new Date(coupon.expiresAt) < new Date()) {
      localStorage.removeItem(COUPON_STORAGE_KEY)
      return null
    }

    return coupon
  } catch {
    localStorage.removeItem(COUPON_STORAGE_KEY)
    return null
  }
}

const calculateExpiryDate = (days = DEFAULT_EXPIRY_DAYS) => {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date.toISOString()
}

export const applyCoupon = (code, discountData = null) => {
  const coupon = {
    code: code.toUpperCase(),
    appliedAt: new Date().toISOString(),
    expiresAt: calculateExpiryDate(),
    discount: discountData,
  }
  appliedCoupon.set(coupon)
  saveToLocalStorage(coupon)
  return coupon
}

export const removeCoupon = () => {
  appliedCoupon.set(null)
  if (isBrowser) {
    localStorage.removeItem(COUPON_STORAGE_KEY)
  }
}

export const getCouponCode = () => {
  const coupon = appliedCoupon.get()
  if (!coupon) return null

  if (coupon.expiresAt && new Date(coupon.expiresAt) < new Date()) {
    removeCoupon()
    return null
  }

  return coupon.code
}

export const initCouponStore = () => {
  const saved = loadFromLocalStorage()
  if (saved) {
    appliedCoupon.set(saved)
  }
}

if (isBrowser) {
  initCouponStore()
}