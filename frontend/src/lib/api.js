const BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3000/api/v1'

const request = async (endpoint, options = {}) => {
  const token = typeof window !== 'undefined'
    ? localStorage.getItem('accessToken')
    : null

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, config)

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
    orders:         (params = {}) => request(`/admin/orders?${new URLSearchParams(params)}`),
    updateOrder:    (id, status)  => request(`/admin/orders/${id}/status`, { method: 'PUT', body: JSON.stringify({ status }) }),
    discounts:      ()            => request('/admin/discounts'),
    createDiscount: (data)        => request('/admin/discounts', { method: 'POST', body: JSON.stringify(data) }),
    coupons:        ()            => request('/admin/coupons'),
    createCoupon:   (data)        => request('/admin/coupons',   { method: 'POST', body: JSON.stringify(data) }),
  },
}