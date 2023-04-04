import express from 'express'
import { create, get, update, remove } from '../controllers/character.controller'

const characterRouter = express.Router()

characterRouter.post('/', create)

characterRouter.get('/:id', get)

characterRouter.put('/', update)

characterRouter.delete('/', remove)

export default characterRouter