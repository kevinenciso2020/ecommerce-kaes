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

export const setAuth = (user, token) => {
  currentUser.set(user)
  authToken.set(token)
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('accessToken', token)
}

export const clearAuth = () => {
  currentUser.set(null)
  authToken.set(null)
  localStorage.removeItem('user')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}