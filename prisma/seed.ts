import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'f0668504-5a56-498e-9429-ba50e5373475',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados por codigo.',
            maximumAttendees: 120,
        }
    })
}

seed().then(async () => {
    console.log('🌱 Database seeded!')
    prisma.$disconnect()
})