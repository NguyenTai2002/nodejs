
import express from 'express';
import configViewEngine from './config/viewEngine.js';
import initWebRouter from './router/web.js';
import * as dotenv from 'dotenv'
dotenv.config();

const app = express();
const port = process.env.PORT|3000;
//set up view engine
configViewEngine(app);

// set up router
initWebRouter(app);

app.listen(port,()=>{
    console.log("SERVER IS RUNNING");
});