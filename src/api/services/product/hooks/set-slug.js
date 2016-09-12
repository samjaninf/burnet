'use strict';

const slug = require('slug');

module.exports = options => {
  return hook => {
    const now = new Date();

    let generatedSlug = slug(hook.data.name).toLowerCase();
    generatedSlug += `-${now.getTime()}`;

    hook.data = Object.assign({}, hook.data, {
      slug: generatedSlug
    });
  };
};
