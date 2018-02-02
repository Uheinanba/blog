const AbstractController = require('./abstract');

class User extends AbstractController {
  async create() {
    const info = this.ctx.request.body;
    const rs = await this.service.user.create(info);
    console.log(rs);
  }
}
