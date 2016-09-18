'use strict';

const errors = require('feathers-errors').errors;
const app = require('../../../index.js');

module.exports = options => {
  return hook => {
    if (!hook.data.handle)
      throw new errors.BadRequest();

    hook.data.handle = hook.data.handle.toLowerCase();
  };
};
