import * as AuthService from '../services/auth.service.js'

const isProduction = process.env.NODE_ENV === 'production'

const setAuthCookies = (res, accessToken, refreshToken) => {
  const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'strict' : 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  }

  res.cookie('accessToken', accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 })
  res.cookie('refreshToken', refreshToken, cookieOptions)
}

const clearAuthCookies = (res) => {
  res.clearCookie('accessToken', { path: '/' })
  res.clearCookie('refreshToken', { path: '/' })
}

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Nombre, email y contraseña son requeridos' })
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' })
    }

    const result = await AuthService.registerUser({ name, email, password })
    res.status(201).json(result)
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son requeridos' })
    }

    const result = await AuthService.loginUser({ email, password })
    setAuthCookies(res, result.accessToken, result.refreshToken)
    res.json({ user: result.user, accessToken: result.accessToken })
  } catch (err) {
    next(err)
  }
}

export const refresh = async (req, res, next) => {
  try {
    const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken

    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token requerido' })
    }

    const result = await AuthService.refreshAccessToken(refreshToken)
    setAuthCookies(res, result.accessToken, result.refreshToken)
    res.json({ user: result.user, accessToken: result.accessToken })
  } catch (err) {
    next(err)
  }
}

export const logout = async (req, res, next) => {
  try {
    const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken
    if (refreshToken) await AuthService.logoutUser(refreshToken)
    clearAuthCookies(res)
    res.json({ message: 'Sesión cerrada correctamente' })
  } catch (err) {
    next(err)
  }
}

export const me = async (req, res) => {
  // req.user lo inyecta el middleware isAuth
  res.json({ user: req.user })
}