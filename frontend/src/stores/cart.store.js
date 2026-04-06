import { atom, computed } from 'nanostores'

export const cartItems = atom([])
export const cartOpen  = atom(false)

if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('cart')
  if (saved) {
    try { cartItems.set(JSON.parse(saved)) } catch {}
  }
  cartItems.subscribe(items => {
    localStorage.setItem('cart', JSON.stringify(items))
  })
}

const storedCart = localStorage.getItem('cart')

export const cart = atom(storedCart ? JSON.parse(storedCart) : [])

cart.subscribe(value => {
  localStorage.setItem('cart', JSON.stringify(value))
})

export const cartCount = computed(cartItems, items =>
  items.reduce((sum, item) => sum + item.quantity, 0)
)

export const cartTotal = computed(cartItems, items =>
  items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
)

export const addToCart = (product, quantity = 1, size = null, color = null) => {
  const current = cartItems.get()
  const existingIndex = current.findIndex(item =>
    item.id === product.id && item.size === size && item.color === color
  )
  if (existingIndex >= 0) {
    const updated = [...current]
    updated[existingIndex] = {
      ...updated[existingIndex],
      quantity: updated[existingIndex].quantity + quantity
    }
    cartItems.set(updated)
  } else {
    cartItems.set([...current, {
      id:       product.id,
      name:     product.name,
      price:    parseFloat(product.price),
      image:    product.images?.[0]?.url || '',
      slug:     product.slug,
      size,
      color,
      quantity,
    }])
  }
}

export const removeFromCart = (id, size, color) => {
  cartItems.set(
    cartItems.get().filter(item =>
      !(item.id === id && item.size === size && item.color === color)
    )
  )
}

export const updateQuantity = (id, size, color, quantity) => {
  if (quantity <= 0) { removeFromCart(id, size, color); return }
  cartItems.set(
    cartItems.get().map(item =>
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity }
        : item
    )
  )
}

export const clearCart = () => cartItems.set([])