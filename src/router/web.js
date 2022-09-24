import express from 'express';

let router = express.Router();

const initWebRouter = (app)=>{
    router.get('/', (req, res) => {
        res.render('index.ejs');
    });

    return app.use('/', router);
};

export default initWebRouter;
// module.exports = initWebRouter;