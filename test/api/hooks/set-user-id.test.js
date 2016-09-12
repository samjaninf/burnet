'use strict';

const chai = require('chai');
chai.should();

const globalHooks = require('../../../src/api/hooks');

describe('Set User Id Hook', () => {
  const setUserId = globalHooks.setUserId();

  it('should set user id', () => {
    let hook = {
      params: {
        user: {
          id: 1
        }
      },
      data: {

      }
    };

    setUserId(hook);

    hook.data.userId.should.be.ok.and.equal(hook.params.user.id);
  });
});
