import * as express from 'express'
import {Application} from 'express'
import * as mongoose from 'mongoose';
import {Router} from "./routes/Router";
import {json} from "body-parser";


class App {
    public express: Application;

    constructor() {
        this.express = express();
        mongoose.connect('mongodb://localhost:27017/jewish-app');
        this.express.use(json());
        this.mountRoutes()
    }

    private mountRoutes(): void {
        this.express.use('/', Router);
    }
}

export default new App().express
