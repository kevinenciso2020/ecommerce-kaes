import * as AuthService from '../services/auth.service.js'

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
    res.json(result)
  } catch (err) {
    next(err)
  }
}

export const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token requerido' })
    }

    const result = await AuthService.refreshAccessToken(refreshToken)
    res.json(result)
  } catch (err) {
    next(err)
  }
}

export const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body
    if (refreshToken) await AuthService.logoutUser(refreshToken)
    res.json({ message: 'Sesión cerrada correctamente' })
  } catch (err) {
    next(err)
  }
}

export const me = async (req, res) => {
  // req.user lo inyecta el middleware isAuth
  res.json({ user: req.user })
}