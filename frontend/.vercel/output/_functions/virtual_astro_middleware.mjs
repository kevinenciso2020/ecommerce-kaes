import jwt from 'jsonwebtoken';
import { ag as sequence } from './chunks/sequence_CEhBxCfK.mjs';

const ADMIN_ROUTES = ['/admin'];

const isAdminRole = (role) => {
  return role === 'ADMIN' || role === 'SUPER_ADMIN'
};

const onRequest$1 = async (context, next) => {
  const { url, request, locals } = context;

  const path = url.pathname;
  const isAdminRoute = ADMIN_ROUTES.some(route => path.startsWith(route));

  if (!isAdminRoute) {
    return next()
  }

  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    return next()
  }

  const token = request.headers.get('cookie')?.match(/accessToken=([^;]+)/)?.[1];

  if (!token) {
    return context.redirect('/auth/login')
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!isAdminRole(decoded.role)) {
      return context.redirect('/auth/login')
    }

    locals.user = decoded;
    locals.isAdmin = true;
    locals.isSuperAdmin = decoded.role === 'SUPER_ADMIN';

    return next()
  } catch (err) {
    return context.redirect('/auth/login')
  }
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
