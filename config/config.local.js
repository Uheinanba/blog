'use strict';

module.exports = () => {
  return {
    security: {
      csrf: {
        enable: false,
      },
    },
  };
};
