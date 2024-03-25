import { Router } from 'express'
import {
	createUser,
	getUserEmail,
	getUsers,
	validateCreateUser,
} from './controller.js'

export const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.post('/', validateCreateUser, getUserEmail, createUser)
