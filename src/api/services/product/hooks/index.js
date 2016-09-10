'use strict';

const commonHooks = require('feathers-hooks-common');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    commonHooks.setCreatedAt('createdAt')
  ],
  update: [
    commonHooks.setUpdatedAt('updatedAt')
  ],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
