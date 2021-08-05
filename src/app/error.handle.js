const errorTypes = require('../constants/error-type');

const errorHandler = (error, ctx) =>{
  let status, message;
  switch (error.message) {
    case errorTypes.NAME_OR_PASSDORW_IS_REQUIRED:
      status = 400;
      message = "用户名或密码不能为空~";
      break;
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409;
      message = "用户名已存在~";
      break;
    default: 
      status = 404;
      message = "NOT FOUND"
  }
  ctx.status = status;
  ctx.body = message;
}

module.exports = errorHandler;