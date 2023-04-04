import { NextFunction, Request, Response } from "express";
import { createCharacter } from "../services/character.service";
import { handlePrismaError } from "../utils/errorHandlers";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    await createCharacter(req.body)
    res.sendStatus(201)
  } catch(e) {
    const { code, message } = handlePrismaError(e as Error)
    res.status(code).send(message)
  }
}