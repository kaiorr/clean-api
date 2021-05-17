import { Request, Response, NextFunction } from 'express'

export const contetType = (req: Request, res: Response, next: NextFunction): void => {
  res.type('json')
  next()
}
