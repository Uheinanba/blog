'use strict';

const Service = require('egg').Service;

class Cookie extends Service {
  set(key, value, config = {}) {
    // cookie有效期为30天
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
    this.ctx.cookies.set(
      key,
      value,
      Object.assign(
        {
          expires,
          overwrite: true,
          secure: false,
          encrypt: true, // 加密传输
        },
        config,
      ),
    );
  }
  get(key) {
    return this.ctx.cookies.get(key, {
      overwrite: true,
      encrypt: true,
    });
  }
  setUser(user) {
    this.set('authX', JSON.stringify(user));
  }
  getUser() {
    try {
      return JSON.parse(this.get('authX'));
    } catch (error) {
      return null;
    }
  }
  clearUser() {
    this.set('authX', '', {
      expires: Date.now(),
    });
  }
}

module.exports = Cookie;
