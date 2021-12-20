import express from 'express'
import { rootRouter } from './root'
import { helloRouter } from './hello'

const router = express.Router()

router.use('/hello/:name', helloRouter)
router.use('/', rootRouter)
export default router
