'use strict';

const sinon = require('sinon');
const chai = require('chai');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

describe('Logger tests', () => {
  let app;
  let logger;

  let infoSpy;
  let errorSpy;

  const REQ = {};
  const RES = {};
  const NEXT = sinon.spy();

  beforeEach(() => {
    app = {};
    // We pass an empty object since logger.js sets winston into it
    logger = require('../../../src/api/middleware/logger.js')(app);
    infoSpy = sinon.spy(app.logger, 'info');
    errorSpy = sinon.spy(app.logger, 'error');
  });

  afterEach(() => {
    infoSpy.restore();
    errorSpy.restore();
  });

  it('should not log anything if no errors are passed to it', () => {
    const ERROR = null;
    logger(ERROR, REQ, RES, NEXT);
    infoSpy.should.not.have.been.called;
  });

  it('should not append if no error code', () => {
    const ERROR = {
      code: null,
      message: 'failure'
    };
    const _REQ = Object.assign({
      url: 'test'
    }, REQ);
    logger(ERROR, _REQ, RES, NEXT);
    errorSpy.should.have.been.calledWith(`Route: ${_REQ.url} - ${ERROR.message}`);
  });
});
