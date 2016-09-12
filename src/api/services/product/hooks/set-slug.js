'use strict';

const slug = require('slug');

module.exports = options => {
  return hook => {
    const now = new Date();

    let generatedSlug = slug(hook.data.name);
    generatedSlug += `-${now.getTime()}`;

    // TODO: make sure slug is unique
    hook.data = Object.assign({}, hook.data, {
      slug: generatedSlug
    });
  };
};
