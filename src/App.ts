import * as express from 'express'
import {Application} from 'express'
import * as mongoose from 'mongoose';
import {Router} from "./routes/Router";
import {json} from "body-parser";
import clientErrorHandler from "./handlers/ClientErrorHandler";


class App {
    public app: Application;

    constructor() {
        this.app = express();
        mongoose.connect('mongodb://localhost:27017/jewish-app');
        this.app.use(json());
        let app = this.app;

        // this.mountRoutes();
        this.app.use('/', Router);
        this.registerHandlers();
        this.app.use(function(error, req, res, next) {
            // Any request to this server will get here, and will send an HTTP
            // response with the error message 'woops'
            res.json({ message: error.message });
        });
    }

    private mountRoutes(): void {
        this.app.use('/', Router);
    }

    private registerHandlers(): void {
        this.app.use(clientErrorHandler);
    }
}

export default new App().app
