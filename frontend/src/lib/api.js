const BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3000/api/v1'

let isRefreshing = false
let refreshSubscribers = []

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb)
}

const onTokenRefreshed = (newToken) => {
  refreshSubscribers.forEach(cb => cb(newToken))
  refreshSubscribers = []
}

const getRefreshToken = () => 
  typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null

const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken()
  if (!refreshToken) throw new Error('No refresh token')

  const res = await fetch(`${BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  })

  if (!res.ok) {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    window.location.href = '/auth/login'
    throw new Error('Session expired')
  }

  const data = await res.json()
  localStorage.setItem('accessToken', data.accessToken)
  localStorage.setItem('refreshToken', data.refreshToken)
  onTokenRefreshed(data.accessToken)
  return data.accessToken
}

const request = async (endpoint, options = {}) => {
  const token = typeof window !== 'undefined'
    ? localStorage.getItem('accessToken')
    : null

  const isFormData = options.body instanceof FormData

  const config = {
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  }

  let res = await fetch(`${BASE_URL}${endpoint}`, config)

  if (res.status === 401 && !endpoint.includes('/auth/refresh')) {
    if (!isRefreshing) {
      isRefreshing = true
      try {
        const newToken = await refreshAccessToken()
        config.headers.Authorization = `Bearer ${newToken}`
        res = await fetch(`${BASE_URL}${endpoint}`, config)
      } catch (err) {
        isRefreshing = false
        throw err
      }
      isRefreshing = false
    } else {
      return new Promise((resolve) => {
        subscribeTokenRefresh((newToken) => {
          config.headers.Authorization = `Bearer ${newToken}`
          resolve(fetch(`${BASE_URL}${endpoint}`, config).then(r => r.json()))
        })
      })
    }
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Error del servidor' }))
    throw new Error(error.error || 'Error del servidor')
  }

  return res.json()
}

export const api = {
  auth: {
    login:    (data) => request('/auth/login',    { method: 'POST', body: JSON.stringify(data) }),
    register: (data) => request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
    me:       ()     => request('/auth/me'),
    logout:   (refreshToken) => request('/auth/logout', { method: 'POST', body: JSON.stringify({ refreshToken }) }),
  },
  products: {
    list:   (params = {}) => request(`/products?${new URLSearchParams(params)}`),
    detail: (slug)        => request(`/products/${slug}`),
    create: (formData)    => request('/products', { method: 'POST', body: formData, headers: {} }),
    update: (id, formData)=> request(`/products/${id}`, { method: 'PUT', body: formData, headers: {} }),
    delete: (id)          => request(`/products/${id}`, { method: 'DELETE' }),
  },
  categories: {
    list:   ()     => request('/products/categories'),
    create: (data) => request('/products/categories', { method: 'POST', body: JSON.stringify(data) }),
  },
  cart: {
    get:    ()            => request('/cart'),
    add:    (data)        => request('/cart',           { method: 'POST',   body: JSON.stringify(data) }),
    update: (itemId, qty) => request(`/cart/${itemId}`, { method: 'PUT',    body: JSON.stringify({ quantity: qty }) }),
    remove: (itemId)      => request(`/cart/${itemId}`, { method: 'DELETE' }),
    clear:  ()            => request('/cart',           { method: 'DELETE' }),
  },
  orders: {
    create: (data) => request('/orders',      { method: 'POST', body: JSON.stringify(data) }),
    list:   ()     => request('/orders'),
    detail: (id)   => request(`/orders/${id}`),
  },
admin: {
    stats:          ()            => request('/admin/stats'),
    products:      (params = {}) => request(`/admin/products?${new URLSearchParams(params)}`),
    orders:         (params = {}) => request(`/admin/orders?${new URLSearchParams(params)}`),
    updateOrder:    (id, status)  => request(`/admin/orders/${id}/status`, { method: 'PUT', body: JSON.stringify({ status }) }),
    discounts:      ()            => request('/admin/discounts'),
    createDiscount: (data)        => request('/admin/discounts', { method: 'POST', body: JSON.stringify(data) }),
    coupons:        ()            => request('/admin/coupons'),
    createCoupon:   (data)      => request('/admin/coupons',   { method: 'POST', body: JSON.stringify(data) }),
  },
  payments: {
    createPreference: (data) => request('/payments/create-preference', { method: 'POST', body: JSON.stringify(data) }),
    getStatus: (orderId) => request(`/payments/status/${orderId}`),
    wompi: {
      createCheckout: (orderId) => request('/payments/wompi/create-checkout', { method: 'POST', body: JSON.stringify({ orderId }) }),
      getAcceptanceToken: () => request('/payments/wompi/acceptance-token'),
    },
  },
  coupons: {
    validate: (code, subtotal = 0) => request(`/coupons/${code}?subtotal=${subtotal}`),
  },
}