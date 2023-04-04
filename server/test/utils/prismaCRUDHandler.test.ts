import { Response } from 'express'
import prismaCRUDHandler from '../../utils/prismaCRUDHandler'

const mockSend = jest.fn()

const mockResponse = {
  status: () => ({ send: mockSend }),
  json: jest.fn().mockReturnValue({})
}

test('should handle success state for the CRUD handler', () => {
  const mockFn = jest.fn()

  prismaCRUDHandler(mockResponse as unknown as Response, mockFn)

  expect(mockFn).toHaveBeenCalled()
  expect(mockSend).not.toHaveBeenCalled()
})

test('should handle error state for the CRUD handler', () => {
  const mockFn = () => { throw Error() }

  prismaCRUDHandler(mockResponse as unknown as Response, mockFn)

  expect(mockFn).toThrowError()
  expect(mockSend).toHaveBeenCalled()
})