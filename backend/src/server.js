import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'

import { errorHandler } from './middleware/error.middleware.js'

import authRoutes     from './routes/auth.routes.js'
import productRoutes  from './routes/product.routes.js'
import orderRoutes    from './routes/order.routes.js'
import paymentRoutes  from './routes/payment.routes.js'
import adminRoutes    from './routes/admin.routes.js'
import cartRoutes     from './routes/cart.routes.js'

const app  = express()
const PORT = process.env.PORT || 3000

// ── Seguridad ────────────────────────────────────────────────
app.use(helmet())

app.use(cors({
  origin:      process.env.FRONTEND_URL || 'http://localhost:4321',
  credentials: true,
}))

// Rate limiting global — máximo 100 peticiones por 15 minutos por IP
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max:      100,
  message:  { error: 'Demasiadas peticiones, intenta más tarde' },
}))

// ── Body parsing ─────────────────────────────────────────────
// Stripe webhooks necesitan el body en raw, por eso esta ruta va antes del json parser
app.use('/api/v1/payments/webhook/stripe', express.raw({ type: 'application/json' }))
app.use(express.json({ limit: '10mb' }))

// ── Logs ─────────────────────────────────────────────────────
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

// ── Rutas ────────────────────────────────────────────────────
app.use('/api/v1/auth',     authRoutes)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/orders',   orderRoutes)
app.use('/api/v1/payments', paymentRoutes)
app.use('/api/v1/admin',    adminRoutes)
app.use('/api/v1/cart',     cartRoutes)

// Health check — para verificar que el servidor está vivo
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV })
})

// ── Error handler global (siempre al final) ───────────────────
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`)
  console.log(`📦 Entorno: ${process.env.NODE_ENV}`)
})

export default app