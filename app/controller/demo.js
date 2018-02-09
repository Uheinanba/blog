'use strict';

const Controller = require('egg').Controller;

class Post extends Controller {
  async index() {
    if (this.a) {
      this.a = this.a + 1;
    } else {
      this.a = 1;
    }
    console.log(this.a);
    await this.ctx.render('demo.html', {
      name: this.ctx.authUser ? this.ctx.authUser.name : '',
    });
  }
}

module.exports = Post;
