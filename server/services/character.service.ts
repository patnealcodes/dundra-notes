import { Character, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createCharacter(data: Character) {
  try {
    await prisma.character.create({ data })
  } catch(e) {
    throw e
  }
}

export async function getCharacter(id: number) {
  try {
    const character = await prisma.character.findUnique({ where: { id } })

    return character
  } catch(e) {
    throw(e)
  }
}

export async function updateCharacter({ id, ...data }: Character) {
  try {
    await prisma.character.update({
      where: { id },
      data
    })
  } catch(e) {
    throw(e)
  }
}

export async function removeCharacter(id: number) {
  try {
    await prisma.character.delete({ where: { id }})
  } catch(e) {
    throw(e)
  }
}