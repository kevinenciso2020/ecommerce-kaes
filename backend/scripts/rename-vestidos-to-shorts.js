import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const before = await prisma.category.findUnique({ where: { slug: 'vestidos' } })
  if (!before) {
    console.log('No existe la categoría con slug "vestidos". Nada que actualizar.')
    const all = await prisma.category.findMany({ select: { slug: true, name: true } })
    console.log('Categorías actuales:', all)
    return
  }

  const conflicts = await prisma.category.findUnique({ where: { slug: 'shorts' } })
  if (conflicts && conflicts.id !== before.id) {
    console.error('Conflicto: ya existe otra categoría con slug "shorts":', conflicts)
    process.exit(1)
  }

  const updated = await prisma.category.update({
    where: { slug: 'vestidos' },
    data:  { slug: 'shorts', name: 'Shorts', description: 'Shorts' },
  })

  console.log('✅ Categoría actualizada:')
  console.log({
    id:          updated.id,
    name:        updated.name,
    slug:        updated.slug,
    description: updated.description,
  })

  const total = await prisma.category.count({ where: { slug: 'shorts' } })
  console.log(`Filas con slug='shorts': ${total}`)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
