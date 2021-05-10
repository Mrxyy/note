import koa = require("koa");
import routes = require("./router");
const app = new koa();
app.use(async (ctx,next) => {
    ctx.body = 'Hello World1';
    next();
}).use(routes).listen(3000)
console.log("localhost:3000");
