import { json } from 'body-parser';
import * as express from 'express';
import { Application } from 'express';
import * as mongoose from 'mongoose';
import { Router } from './routes/Router';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        mongoose.connect('mongodb://localhost:27017/jewish-app');
        this.app.use(json());
        this.mountRoutes();
    }

    private mountRoutes(): void {
        this.app.use('/', Router);

}

export default new App().app
