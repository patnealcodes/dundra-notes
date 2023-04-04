import { Prisma } from "@prisma/client"

export function handlePrismaError(e: Error) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    return {
      code: 400,
      message: `An error has ocurred - code ${e.code}`
    }
  } else if (e instanceof Prisma.PrismaClientValidationError) {
    return {
      code: 400,
      message: 'There was a validation issue with the request body. Please check the data being sent and try again.'
    }
  }

  return {
    code: 400,
    message: 'An unknown error has ocurred ¯\\_(ツ)_/¯'
  }
}