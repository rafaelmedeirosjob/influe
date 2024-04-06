import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      id: "37210fe1-6b51-4850-8481-6dc8cff9b123",
      email: 'test@test.com',
      name: 'Test User',
      password: `$2y$12$GBfcgD6XwaMferSOdYGiduw3Awuo95QAPhxFE0oNJ.Ds8qj3pzEZy`,
      categories: {
        create: [{
            name: 'Tecnology',
            description: 'Tecnology is a category from people works with IT, AI, Data Science, Software developer'
          }],
      }
    }
  })
  console.log({ user })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })