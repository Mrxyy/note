"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Router = require("koa-router");
let router = new Router();
router.get("/", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.response.body = "<h1>hello!</h1>";
    ctx.type = 'text/html; charset=utf-8';
}));
router.get("/1", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.response.body = "<h1>page-1</h1>";
    ctx.type = 'text/plain; charset=utf-8';
}));
const routes = router.routes();
module.exports = routes;
