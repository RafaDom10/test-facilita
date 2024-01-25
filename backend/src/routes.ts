import { type Request, type Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

export default router
