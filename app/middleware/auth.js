'use strict';

module.exports = options => {
  return async function auth(ctx, next) {
    if (ctx.url.indexOf('blog/server') >= 0) {
      const user = ctx.service.cookie.getUser();
      if (user) {
        ctx.authUser = user;
        await next();
      } else {
        ctx.status = 401; // 未授权
      }
    } else {
      await next();
    }
  };
};
