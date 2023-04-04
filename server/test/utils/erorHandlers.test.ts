import { Prisma } from '@prisma/client'
import { handlePrismaError } from '../../utils/errorHandlers'

test('should handle prisma validation error', () => {
  const error = new Prisma.PrismaClientKnownRequestError('', { code: 'abc', clientVersion: 'ok' })

  const { code, message } = handlePrismaError(error)

  expect(code).toBe(400)
  expect(message).toBe('An error has ocurred - code abc')
})

test('should handle prisma known error', () => {
  const error = new Prisma.PrismaClientValidationError()

  const { code, message } = handlePrismaError(error)

  expect(code).toBe(400)
  expect(message).toBe('There was a validation issue with the request body. Please check the data being sent and try again.')
})

test('should handle an unknown error', () => {
  const error = new Error()

  const { code, message } = handlePrismaError(error)

  expect(code).toBe(400)
  expect(message).toBe('An unknown error has ocurred ¯\\_(ツ)_/¯')
})