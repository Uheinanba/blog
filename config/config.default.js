'use strict';

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '_1517559280474_4265',
    md5Key: 'c+a_>NZ248m~GRS)',
    mongoose: {
      url: 'mongodb://127.0.0.1/blog',
    },
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: { '.htm': 'nunjucks' },
    },
    middleware: ['auth'],
  };

  return config;
};
