import Router = require("koa-router");
let router:Router = new Router();

router.get("/",async (ctx,next) => {
    ctx.response.body = "<h1>hello!</h1>"
    ctx.type = 'text/html; charset=utf-8';
});

router.get("/1",async (ctx,next) => {
    ctx.response.body = "<h1>page-1</h1>"
    ctx.type = 'text/plain; charset=utf-8';
});

const routes:Router.IMiddleware = router.routes();
export = routes;