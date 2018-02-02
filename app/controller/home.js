'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = this.service.user.getById();
  }
}

module.exports = HomeController;
