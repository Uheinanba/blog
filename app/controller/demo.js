'use strict';

const Controller = require('egg').Controller;

class Post extends Controller {
  async index() {
    await this.ctx.render('demo.html', {
      name: this.ctx.authUser ? this.ctx.authUser.name : '',
    });
  }
}

module.exports = Post;
