import { Request, Response } from 'express'

type HelloResponse = {
  hello: string
}

type HelloBuilder = (name: string) => HelloResponse

const helloBuilder: HelloBuilder = (name) => ({ hello: name })

export const helloRouter = (req: Request, res: Response) => {
  const { params } = req
  const { name = 'World' } = params
  const response = helloBuilder(name)
  return res.json(response)
}
