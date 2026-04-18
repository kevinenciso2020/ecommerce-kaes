import { atom } from 'nanostores'

export const currentUser = atom(null)
export const authToken   = atom(null)
export const authLoading = atom(false)

if (typeof window !== 'undefined') {
  const savedUser  = localStorage.getItem('user')
  const savedToken = localStorage.getItem('accessToken')
  if (savedUser && savedToken) {
    try {
      currentUser.set(JSON.parse(savedUser))
      authToken.set(savedToken)
    } catch {}
  }
}

export const setAuth = async (user, token, refreshToken) => {
  currentUser.set(user)
  authToken.set(token)
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('accessToken', token)
  if (refreshToken) localStorage.setItem('refreshToken', refreshToken)
  const { initCart } = await import('./cart.store.js')
  await initCart()
}

export const clearAuth = async () => {
  const { logoutCart } = await import('./cart.store.js')
  logoutCart()
  currentUser.set(null)
  authToken.set(null)
  localStorage.removeItem('user')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}