
const Router = require('koa-router');
const  {
  create
} =require('../controller/user.controller');
const  {
  verifyUser
} = require('../middleware/user.middleware');

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/', verifyUser, create)

module.exports = userRouter;
