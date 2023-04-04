import { Character, PrismaClient, Race } from '@prisma/client'

const prisma = new PrismaClient()

export async function createCharacter({
  name,
  race,
  imageUrl,
  locationId,
  factionId
}: Character) {
  try {
    await prisma.character.create({
      data: {
        name,
        race,
        imageUrl,
        locationId,
        factionId
      }
    })
  } catch(e) {
    throw e
  }
}