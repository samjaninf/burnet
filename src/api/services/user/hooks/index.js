'use strict';

const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const setUrl = require('./set-url');
const handleToLowerCase = require('./handle-to-lower-case');

exports.before = {
  all: [],
  find: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  get: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({
      ownerField: 'id'
    })
  ],
  create: [
    auth.hashPassword(),
    setUrl(),
    handleToLowerCase()
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({
      ownerField: 'id'
    }),
    handleToLowerCase()
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({
      ownerField: 'id'
    })
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({
      ownerField: 'id'
    })
  ]
};

exports.after = {
  all: [hooks.remove('password')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
