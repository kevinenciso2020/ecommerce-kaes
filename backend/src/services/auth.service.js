import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../config/prisma.js'
import { generateTokens } from '../utils/jwt.utils.js'

export const registerUser = async ({ name, email, password }) => {
  // Verificar si el email ya existe
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    const err = new Error('El email ya está registrado')
    err.status = 409
    throw err
  }

  // Hashear la contraseña — nunca guardamos contraseñas en texto plano
  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
    select: { id: true, name: true, email: true, role: true }
  })

  const tokens = generateTokens(user)

  // Guardar el refresh token en la base de datos
  await prisma.refreshToken.create({
    data: {
      token:     tokens.refreshToken,
      userId:    user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    }
  })

  return { user, ...tokens }
}

export const loginUser = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    const err = new Error('Credenciales incorrectas')
    err.status = 401
    throw err
  }

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    const err = new Error('Credenciales incorrectas')
    err.status = 401
    throw err
  }

  const safeUser = { id: user.id, email: user.email, role: user.role, name: user.name }
  const tokens = generateTokens(safeUser)

  // Guardar el nuevo refresh token
  await prisma.refreshToken.create({
    data: {
      token:     tokens.refreshToken,
      userId:    user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    }
  })

  return { user: safeUser, ...tokens }
}

export const refreshAccessToken = async (refreshToken) => {
  // Verificar que el token sea válido criptográficamente
  let decoded
  try {
    decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
  } catch {
    const err = new Error('Refresh token inválido')
    err.status = 401
    throw err
  }

  // Verificar que exista en la base de datos (no fue revocado)
  const stored = await prisma.refreshToken.findUnique({ where: { token: refreshToken } })
  if (!stored || stored.expiresAt < new Date()) {
    const err = new Error('Refresh token expirado o revocado')
    err.status = 401
    throw err
  }

  const user = await prisma.user.findUnique({
    where:  { id: decoded.id },
    select: { id: true, email: true, role: true, name: true }
  })

  const tokens = generateTokens(user)

  // Rotar el refresh token — el viejo se elimina y se crea uno nuevo
  await prisma.refreshToken.delete({ where: { token: refreshToken } })
  await prisma.refreshToken.create({
    data: {
      token:     tokens.refreshToken,
      userId:    user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    }
  })

  return { user, ...tokens }
}

export const logoutUser = async (refreshToken) => {
  // Eliminar el refresh token de la DB — invalida la sesión
  await prisma.refreshToken.deleteMany({ where: { token: refreshToken } })
}