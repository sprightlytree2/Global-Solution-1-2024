import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import * as bodyParser from 'body-parser';
import routes from './routes';
import cors from "cors";

AppDataSource.initialize().then(async () => {   
    
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(routes);

    app.listen(3000);   
    console.log("Express server has started on port 3000. Open http://localhost:3000/posts to see results")

}).catch(error => console.log(error))