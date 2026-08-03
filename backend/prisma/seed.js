import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed...')

  // Crear usuario administrador
  const hashedPassword = await bcrypt.hash('admin123', 12)

  const admin = await prisma.user.upsert({
    where:  { email: 'admin@ecommerce.com' },
    update: {},
    create: {
      name:     'Administrador',
      email:    'admin@ecommerce.com',
      password: hashedPassword,
      role:     'ADMIN',
    }
  })

  console.log('✅ Admin creado:', admin.email)

  // Crear categorías base
  const categorias = [
    { name: 'Camisetas',  slug: 'camisetas',  description: 'Camisetas y tops' },
    { name: 'Pantalones', slug: 'pantalones', description: 'Pantalones y jeans' },
    { name: 'Vestidos',   slug: 'vestidos',   description: 'Vestidos y faldas' },
    { name: 'Accesorios', slug: 'accesorios', description: 'Accesorios y complementos' },
    { name: 'Zapatos',    slug: 'zapatos',    description: 'Calzado' },
  ]

  for (const cat of categorias) {
    await prisma.category.upsert({
      where:  { slug: cat.slug },
      update: {},
      create: cat,
    })
  }

  console.log('✅ Categorías creadas:', categorias.length)

  // Crear productos de ejemplo
  const camisetas = await prisma.category.findUnique({ where: { slug: 'camisetas' } })

  await prisma.product.upsert({
    where:  { slug: 'camiseta-basica-blanca' },
    update: {},
    create: {
      name:        'Camiseta Básica Blanca',
      slug:        'camiseta-basica-blanca',
      description: 'Camiseta básica de algodón 100%, perfecta para el día a día.',
      price:       49900,
      stock:       50,
      categoryId:  camisetas.id,
      isFeatured:  true,
      variants: {
        create: [
          { size: 'S',  color: 'Blanco', stock: 10 },
          { size: 'M',  color: 'Blanco', stock: 20 },
          { size: 'L',  color: 'Blanco', stock: 15 },
          { size: 'XL', color: 'Blanco', stock: 5  },
        ]
      }
    }
  })

  await prisma.product.upsert({
    where:  { slug: 'camiseta-oversize-negra' },
    update: {},
    create: {
      name:        'Camiseta Oversize Negra',
      slug:        'camiseta-oversize-negra',
      description: 'Camiseta oversize de algodón premium, estilo urbano.',
      price:       65900,
      stock:       30,
      categoryId:  camisetas.id,
      isFeatured:  true,
      variants: {
        create: [
          { size: 'S',  color: 'Negro', stock: 8  },
          { size: 'M',  color: 'Negro', stock: 12 },
          { size: 'L',  color: 'Negro', stock: 10 },
        ]
      }
    }
  })

  console.log('✅ Productos de ejemplo creados')

  // Crear cupón de bienvenida
  await prisma.coupon.upsert({
    where:  { code: 'BIENVENIDO10' },
    update: {},
    create: {
      code:        'BIENVENIDO10',
      type:        'PERCENTAGE',
      value:       10,
      minPurchase: 50000,
      maxUses:     100,
      isActive:    true,
    }
  })

  console.log('✅ Cupón BIENVENIDO10 creado (10% de descuento)')
  console.log('')
  console.log('🎉 Seed completado exitosamente')
  console.log('')
  console.log('📋 Credenciales de admin:')
  console.log('   Email:    admin@ecommerce.com')
  console.log('   Password: admin123')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })