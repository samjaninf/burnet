'use strict';

const slug = require('slug');

module.exports = options => {
  return hook => {
    options = Object.assign({}, options);
    const now = new Date();

    let generatedSlug = slug(hook.data.name).toLowerCase();
    if (!options.ignoreTime)
      generatedSlug += `-${now.getTime()}`;

    hook.data = Object.assign({}, hook.data, {
      slug: generatedSlug
    });
  };
};
