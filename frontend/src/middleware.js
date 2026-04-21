import jwt from 'jsonwebtoken'

const ADMIN_ROUTES = ['/admin']

const isAdminRole = (role) => {
  return role === 'ADMIN' || role === 'SUPER_ADMIN'
}

export const onRequest = async (context, next) => {
  const { url, request, locals } = context

  const path = url.pathname
  const isAdminRoute = ADMIN_ROUTES.some(route => path.startsWith(route))

  if (!isAdminRoute) {
    return next()
  }

  const JWT_SECRET = process.env.JWT_SECRET

  if (!JWT_SECRET) {
    return next()
  }

  const token = request.headers.get('cookie')?.match(/accessToken=([^;]+)/)?.[1]

  if (!token) {
    locals.isAdmin = false
    return next()
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    if (!isAdminRole(decoded.role)) {
      locals.isAdmin = false
      return next()
    }

    locals.user = decoded
    locals.isAdmin = true
    locals.isSuperAdmin = decoded.role === 'SUPER_ADMIN'

    return next()
  } catch (err) {
    locals.isAdmin = false
    return next()
  }
}
