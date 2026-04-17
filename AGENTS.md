# AGENTS.md

## Project Structure

- `backend/` - Express.js API with Prisma ORM
- `frontend/` - Astro + React frontend
- `shared/` - Shared code between packages

## Developer Commands

### Backend
```bash
cd backend
npm run dev          # Start dev server with nodemon
npm start           # Production start
npm run db:migrate   # Run Prisma migrations
npm run db:push     # Push schema to DB
npm run db:studio   # Open Prisma Studio
npm run db:seed    # Seed database
```

### Frontend
```bash
cd frontend
npm run dev         # Dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview build
```

## Important Quirks

- **Backend is JavaScript (not TypeScript)** - uses `.js` files, no compilation step despite tsconfig.json `"module": "commonjs"`
- **Database .env file exists** at `backend/.env` - copy to `backend/.env` if missing, contains required secrets
- **Two payment providers**: Stripe and MercadoPago configured
- **File uploads**: multer + Cloudinary for image handling
- **Frontend Node.js requirement**: `node >= 22.12.0` in engines
- **No test suite** - no test scripts or test directory found
- **No lint/typecheck** - no ESLint, Prettier, or TypeScript checking configured