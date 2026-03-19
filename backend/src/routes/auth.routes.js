import { Router } from 'express'
import { register, login, refresh, logout, me } from '../controllers/auth.controller.js'
import { isAuth } from '../middleware/auth.middleware.js'

const router = Router()

router.post('/register', register)
router.post('/login',    login)
router.post('/refresh',  refresh)
router.post('/logout',   logout)
router.get('/me',        isAuth, me)   // ruta protegida — requiere token

export default router