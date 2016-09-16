'use strict';

const errors = require('feathers-errors').errors;
const app = require('../../../../index.js');

module.exports = options => {
  return hook => {
    if (!hook.data.handle)
      throw new errors.BadRequest();

    const url = app.get('host') + app.get('port') + '/' + hook.data.handle;

    hook.data = Object.assign({}, hook.data, {url});
  };
};
