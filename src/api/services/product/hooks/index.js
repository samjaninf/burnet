'use strict';

const setUserId = require('./set-user-id.js');

const auth = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    commonHooks.setCreatedAt('createdAt'),
    setUserId()
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
