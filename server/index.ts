import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send(`Express + Typescript Server`)
})

app.listen(port, () => {
  console.log(`😎[server]: Server is running at http://localhost:${port}`)
})
