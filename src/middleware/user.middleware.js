const errorType = require('../constants/error-type');
const service = require('../service/user.service');

const verifyUser = async (ctx, next) => {
  // 1.获取用户名和密码
  const { name, password } = ctx.request.body;
  console.log(name, password);
  // 2、对数据进行校验
  if (!name ||!password) {
    const error = new Error(errorType.NAME_OR_PASSDORW_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx)
  }
  // 3、判断用户是否存在
  const result = await service.getUserByName(name);
  if (result.length) {
    const error = new Error(errorType.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // await next();
};

module.exports = {
  verifyUser
}