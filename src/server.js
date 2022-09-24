
import express from 'express';
import configViewEngine from './config/viewEngine.js';

import * as dotenv from 'dotenv'
dotenv.config();

const app = express();
const port = process.env.PORT|3000;

configViewEngine(app);

app.get('/', (req,res)=>{
    res.render('index.ejs');
});

app.get('/about',(req, res)=>{
    res.send(`im nguyen`);
})
app.listen(port,()=>{
    console.log("SERVER Is RUNNING");
})
