import { Request, Response } from "express";
import { createCharacter, removeCharacter, getCharacter, updateCharacter } from "../services/character.service";
import prismaCRUDHandler from "../utils/prismaCRUDHandler";

export async function create(req: Request, res: Response) {
  prismaCRUDHandler(res, async () => {
    await createCharacter(req.body)
    res.sendStatus(201)
  })
}

export async function get(req: Request, res: Response) {
  prismaCRUDHandler(res, async () => {
    const character = await getCharacter(+req.params.id)

    character ?
      res.status(200).send(character)
      : res.sendStatus(404)
  })
}

export async function update(req: Request, res: Response) {
  prismaCRUDHandler(res, async () => {
    await updateCharacter(req.body)
    res.sendStatus(201)
  })
}

export async function remove(req: Request, res: Response) {
  prismaCRUDHandler(res, async () => {
    await removeCharacter(req.body.id)
    res.sendStatus(201)
  })
}