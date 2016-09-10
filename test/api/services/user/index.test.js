'use strict';

const assert = require('assert');
const app = require('../../../../src/api');

describe('user service', function() {
  it('registered the users service', () => {
    assert.ok(app.service('users'));
  });
});
