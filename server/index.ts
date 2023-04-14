import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import characterRouter from './routes/character.route'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

const app = express()
const { PORT, HOSTNAME = 'http://localhost' } = process.env

app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send(`Express + Typescript Server`)
})

app.use('/characters', characterRouter)

app.listen(PORT, () => {
  console.log(`😎[server]: Server is running at ${HOSTNAME}:${PORT}`)
})
