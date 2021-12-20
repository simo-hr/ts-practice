import { Request, Response } from 'express'
export const rootRouter = (_req: Request, res: Response) => {
  return res.send('Hello, Your API is working!!!')
}
