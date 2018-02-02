'use strict';

const Service = require('egg').Service;

class User extends Service {
  create(user) {
    return this.ctx.model
      .User({
        email: user.email,
        password: user.password,
        name: user.name,
      })
      .save();
  }

  getById() {
    console.log(this.ctx.model);
    return 'hello egg';
  }
}

module.exports = User;
