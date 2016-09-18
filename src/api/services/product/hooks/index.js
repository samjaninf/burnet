'use strict';

const globalHooks = require('../../../hooks');
const auth = require('feathers-authentication').hooks;
const setUrl = require('./set-url');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.setUserId(),
    globalHooks.setSlug(),
    setUrl()
  ],
  update: [],
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
