'use strict';

const Controller = require('egg').Controller;

class Post extends Controller {
  index() {
    this.ctx.body = this.ctx.authUser.name;
  }
}

module.exports = Post;
