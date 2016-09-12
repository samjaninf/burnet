'use strict';

const auth = require('feathers-authentication').hooks;

const setUserId = require('./set-user-id.js');
const setSlug = require('./set-slug.js');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    setUserId(),
    setSlug()
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
