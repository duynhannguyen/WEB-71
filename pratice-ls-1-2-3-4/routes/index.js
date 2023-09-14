import express from 'express'
import postRouter from './post.route.js'
import userRouter from './user.route.js'
import authRouter from './auth.route.js'
import authMiddleware from '../middleware/auth.mdw.js'


const route = express.Router()
route.use('/auth', authRouter);
route.use('/posts', authMiddleware, postRouter);
route.use('/user', authMiddleware, userRouter);
export default route;