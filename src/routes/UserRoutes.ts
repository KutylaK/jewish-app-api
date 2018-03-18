import * as express from 'express';
import UserController from "../controllers/UserController";

let userRouter = express.Router();

userRouter.route('/')

    .post(UserController.create)
    .get(UserController.list);

userRouter.route('/:user_id')

    .get(UserController.get)
    .put(UserController.update)
    .delete(UserController.remove);

export const UserRouter = userRouter;