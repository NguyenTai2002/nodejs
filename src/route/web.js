import express from "express";
import homeController from '../controller/homeController.js' ;
let router = express.Router();

const initWebRouter = (app)=>{
    router.get('/', homeController.getHomePage);

    router.get('/about',(req,res)=>{
        res.send("Hello world");
    });
    
    return app.use('/', router);


}
export default initWebRouter;