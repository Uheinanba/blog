'use strict';

const Service = require('egg').Service;

class User extends Service {
  getById() {
    console.log(this.ctx.model);
    return 'hello egg';
  }
}

module.exports = User;
