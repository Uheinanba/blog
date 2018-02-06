'use strict';

const _ = require('lodash');
const md5 = require('blueimp-md5');
const AbstractController = require('./abstract');

class User extends AbstractController {
  async create() {
    const info = this.ctx.request.body;
    const errors = this.app.validator.validate(
      {
        password: 'string',
        email: 'email',
        name: 'string',
      },
      info,
    );
    if (errors) return this.error(_.first(errors).message);

    const user = await this.service.user.getByNameOrEmail(
      info.name || info.email,
    );
    if (user) this.error('用户名或者邮件已被注册');
    const rs = await this.service.user.create(info);
    delete rs.password;
    this.service.cookie.setUser(rs);
    this.success(rs);
  }

  async login() {
    const info = this.ctx.request.body;
    const user = await this.service.user.getByNameOrEmail(
      info.name || info.email,
    );
    if (!user) this.error('账号不存在');
    if (user.password !== md5(info.password, this.config.md5Key))
      this.error('密码错误');
    delete user.password;
    this.service.cookie.setUser(user);
    this.success(this.ctx.authUser);
  }

  logout() {
    this.service.cookie.clearUser();
    this.success('注销成功');
  }
}

module.exports = User;
