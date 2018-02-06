'use strict';

const Service = require('egg').Service;
const md5 = require('blueimp-md5');

class User extends Service {
  async create(user) {
    const result = await this.ctx.model
      .User({
        email: user.email,
        password: md5(user.password, this.config.md5Key),
        name: user.name,
      })
      .save();
    return result.toObject();
  }

  getByNameOrEmail(arg) {
    return this.ctx.model.User.findOne({
      $or: [{ name: arg }, { email: arg }],
    }).lean();
  }

  getById() {
    console.log(this.ctx.model);
    return 'hello egg';
  }
}

module.exports = User;
