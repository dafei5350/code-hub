const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const userRouter = require('../router/user.router')
const errorHandler = require('./error.handle');

const app = new Koa();

app.use(bodyParser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());  //判断路径是否存在
app.on('error', errorHandler)

module.exports = app;