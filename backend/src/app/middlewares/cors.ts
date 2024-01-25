import { type Request, type Response, type NextFunction } from 'express'

export const cors = (
  request: Request, response: Response, next: NextFunction
): void => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  response.setHeader('Access-Control-Allow-Headers', '*')
  response.setHeader('Access-Control-Allow-Methods', '*')
  response.setHeader('Access-Control-Max-Age', '-1')
  next()
}
