// Middleware global de manejo de errores
// Captura cualquier error que llegue aquí desde los controladores
export const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${req.method} ${req.path}:`, err.message)

  // Error de validación de Prisma (registro duplicado, etc.)
  if (err.code === 'P2002') {
    return res.status(409).json({ error: 'Ya existe un registro con ese valor único' })
  }

  // Error de registro no encontrado en Prisma
  if (err.code === 'P2025') {
    return res.status(404).json({ error: 'Registro no encontrado' })
  }

  const status = err.status || err.statusCode || 500
  const message = err.message || 'Error interno del servidor'

  res.status(status).json({ error: message })
}