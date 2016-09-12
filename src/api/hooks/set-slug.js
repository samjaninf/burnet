'use strict';

const slug = require('slug');
const errors = require('feathers-errors').errors;

const defaultOptions = {
  ignoreTime: false
};

module.exports = options => {
  return hook => {
    options = Object.assign({}, defaultOptions, options);
    const now = new Date();

    if (!hook.data.name)
      throw new errors.BadRequest();

    let generatedSlug = slug(hook.data.name).toLowerCase();
    if (!options.ignoreTime)
      generatedSlug += `-${now.getTime()}`;

    hook.data = Object.assign({}, hook.data, {
      slug: generatedSlug
    });
  };
};
