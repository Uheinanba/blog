'use strict';

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '_1517559280474_4265',
    mongoose: {
      url: 'mongodb://127.0.0.1/blog',
    },
    middleware: [],
  };

  return config;
};
