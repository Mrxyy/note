// 不管是强缓存还是协商缓存 在url栏中进行请求不会发生缓存 即不会离线缓存
const Koa = require('koa');
const Router = require('koa-router');
const Path =require('path');
const mime = require('mime');
const fs = require('fs-extra');
const crypto = require('crypto');

const app = new Koa();
const router = new Router();

// 处理首页
router.get(/(^\/index(.html)?$)|(^\/$)/, async (ctx, next) => {
	const { path, response, request } = ctx;
  ctx.type = mime.getType('.html');
  response.set('cache-control', `max-age=${1 * 60}`);
  const content = await fs.readFileSync(Path.resolve(__dirname, './index.html'), 'utf-8');
  ctx.body = content;
  await next();
});
router.get(/(^\/a(.html)?$)/, async (ctx, next) => {
	const { path, response, request } = ctx;
  ctx.type = mime.getType('.html');
  response.set('cache-control', `max-age=${1 * 60}`);
  const content = await fs.readFileSync(Path.resolve(__dirname, './a.html'), 'utf-8');
  ctx.body = content;
  await next();
});

// 处理图片
router.get(/\S*\.(jpe?g|png)$/, async (ctx, next) => {
  const { path, response, request } = ctx;
  
  ctx.type = mime.getType(path);

  // 响应头添加 cache-control: no-cache，即不允许使用强缓存。
  // response.set('cache-control', 'no-cache');

  // max-age 值是精确到秒，设置过期时间为 1 分钟
  // response.set('cache-control', `max-age=${1 * 60}`);

  // 添加expires字段到响应头，过期时间为2分钟
  // response.set('expires', new Date(Date.now() + 2 * 60 * 1000).toString());

  // response.set('last-modified', new Date().toUTCString());  

  // if (new Date(request.headers['if-modified-since']).getTime() + 3 * 1000 > Date.now()) {
  //   response.status = 304;
  // } else {
  //   const image = await fs.readFile(Path.resolve(__dirname, `.${path}`));
  //   ctx.body = image;
  // }
  
  const image = await fs.readFile(Path.resolve(__dirname, `.${path}`));
  const hash = crypto.createHash('sha1').update(image).digest('hex')
  response.set('Etag', hash)
  if(request.headers['if-none-match'] === hash){
    console.log('Etag协商缓存命中.....')
    response.status = 304;
  } else {
    ctx.body = image;
  }
  
  await next();
});

// 处理样式
router.get(/\S*\.css$/, async (ctx, next) => {  
	const { path, response, request } = ctx;
  ctx.type = mime.getType(path);
	response.set('cache-control', `max-age=${1 * 60}`);

  const content = await fs.readFileSync(Path.resolve(__dirname, `.${path}`), 'utf-8');
  ctx.body = content;

  await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8080);