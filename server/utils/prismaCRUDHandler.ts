import { Response } from "express"
import { handlePrismaError } from "./errorHandlers"

export default function prismaCRUDHandler(res: Response, cb: () => void) {
  try {
    cb()
  } catch(e) {
    const { code, message } = handlePrismaError(e as Error)
    res.status(code).send(message)
  }
}