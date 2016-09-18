'use strict';

const errors = require('feathers-errors').errors;

module.exports = options => {
  return hook => {
    if (!hook.data.slug)
      throw new errors.BadRequest();

    const url = `${hook.app.get('protocol')}://${hook.app.get('host')}:${hook.app.get('port')}` +
                `/${hook.params.user.handle}/${hook.data.slug}`;
    hook.data = Object.assign({}, hook.data, {
      url
    });
  };
};
