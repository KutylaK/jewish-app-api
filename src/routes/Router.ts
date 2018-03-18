import * as express from 'express'
import {UserRouter} from "./UserRoutes";

let router = express.Router();
router.use('/user', UserRouter);

export const Router = router;