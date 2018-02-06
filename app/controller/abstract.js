'use strict';

const Controller = require('egg').Controller;

class Abstract extends Controller {
  success(data = null) {
    this.ctx.status = 200;
    this.ctx.body = {
      errCode: 0,
      errMsg: '成功',
      data,
    };
  }

  error(data, code = 403) {
    if (typeof data === 'string') {
      this.ctx.throw(code, data);
    } else {
      this.ctx.throw(data.code, data.msg);
    }
  }

  notFound(msg = 'not found') {
    this.ctx.throw(404, msg);
  }
}

module.exports = Abstract;
