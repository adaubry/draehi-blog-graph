import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding the database...")

  // Create Results
  const result1 = await prisma.results.create({
    data: {
      nodes: {
        create: [
          {
            label: "Node 1",
            deletable: true,
            draggable: true,
            positionX: 0,
            positionY: 0,
            selectable: false,
            background: "#99CCFF",
            color: "#000000",
          },
          {
            label: "Node 2",
            deletable: false,
            draggable: true,
            positionX: 200,
            positionY: -150,
            selectable: false,
            background: "#99CCFF",
            color: "#000000",
          },
          {
            label: "Node 3",
            deletable: false,
            draggable: true,
            positionX: 200,
            positionY: -150,
            selectable: false,
            background: "#99CCFF",
            color: "#000000",
          },
          {
            label: "Node 4",
            deletable: false,
            draggable: true,
            positionX: 200,
            positionY: -150,
            selectable: false,
            background: "#99CCFF",
            color: "#000000",
          },
        ],
      },
      edges: {
        create: [
          {
            label: "Edge 1",
            sourceId: 1,
            targetId: 2,
            stroke: "#CCCCFF",
            type: "default",
          },
          {
            label: "Edge 2",
            sourceId: 1,
            targetId: 3,
            stroke: "#CCCCFF",
            type: "default",
          },
          {
            label: "Edge 3",
            sourceId: 2,
            targetId: 4,
            stroke: "#CCCCFF",
            type: "default",
          },
          {
            label: "Edge 4",
            sourceId: 1,
            targetId: 4,
            stroke: "#CCCCFF",
            type: "default",
          },
        ],
      },
    },
  })

  console.log("Created Results:", result1)

  // Create SavedHistory
  const history1 = await prisma.savedHistory.create({
    data: {
      searchValue: "Example Search",
      results: {
        connect: { id: result1.id },
      },
    },
  })

  console.log("Created SavedHistory:", history1)

  console.log("Seeding completed.")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
