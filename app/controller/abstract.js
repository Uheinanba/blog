const Controller = require('egg').Controller;

class Abstract extends Controller {
  success(data) {
    this.ctx.status = 200;
    this.ctx.body = data;
  }

  error(data, code = 403) {
    if (typeof data == 'string') {
      this.ctx.throw(code, data);
    } else {
      this.ctx.throw(data.code, data.msg);
    }
  }

  notFound(msg = 'not found') {
    this.ctx.throw(404, msg);
  }
}
