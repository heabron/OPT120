import { Router } from 'express'
import { userRouter } from './users/service.js'

export const routes = Router()

routes.use('/usuario', userRouter)
