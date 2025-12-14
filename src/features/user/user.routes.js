import express from 'express';
import UserController from './user.controllers.js';
const userRouter = express.Router();

const userController = new UserController();

userRouter.post('/signup', userController.signUp);
userRouter.post('/signin', userController.signIn);
userRouter.get('/', userController.getAllUsers);

export default userRouter;