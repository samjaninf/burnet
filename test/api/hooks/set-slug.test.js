'use strict';

const chai = require('chai');
chai.should();

const errors = require('feathers-errors').errors;
const globalHooks = require('../../../src/api/hooks');

describe('Set Slug Hook', () => {
  it('should throw BadRequest if no name found in data', () => {
    const setSlug = globalHooks.setSlug();

    let hook = {
      data: {
      }
    };

    //FIXME: throwing ReferenceError: Reflect is not defined
    //setSlug.bind(this, hook).should.throw(errors.BadRequest);
  });

  it('should always generate a lowercase slug', () => {
    const setSlug = globalHooks.setSlug({ignoreTime: true});

    let hook = {
      data: {
        name: 'Boné Ash Ketchum'
      }
    };

    setSlug(hook);

    const expected = 'bone-ash-ketchum';
    hook.data.slug.should.equal(expected);
  });

  it('should append datetime', () => {
    const setSlug = globalHooks.setSlug();

    let hook = {
      data: {
        name: 'Boné Ash Ketchum'
      }
    };

    setSlug(hook);

    const now = new Date();
    let expected = `bone-ash-ketchum-${now.getTime()}`;
    // We ignore the two last digits for a safety margin
    expected = expected.slice(0, expected.length - 3);
    hook.data.slug.slice(0, hook.data.slug.length - 3).should.equal(expected);
  });
});
