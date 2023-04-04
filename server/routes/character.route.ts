import express from 'express'
import { create } from '../controllers/character.controller'

const characterRouter = express.Router()

characterRouter.post('/', create)

// characterRouter.get('/', get)

// characterRouter.put('/:id', update)

// characterRouter.delete('/', delete)

export default characterRouter