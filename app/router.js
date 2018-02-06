'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.get('/', controller.demo.index);

  router.post('/blog/auth/user/register', controller.user.create);
  router.post('/blog/auth/user/login', controller.user.login);

  router.post('/blog/server/post/index', controller.post.index);
};
