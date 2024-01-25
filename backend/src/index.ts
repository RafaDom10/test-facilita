import express, { type Express } from 'express'
import dotenv from 'dotenv'
import { cors } from './app/middlewares/cors'
import routes from './routes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 3000

app.use(cors)
app.use(routes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
