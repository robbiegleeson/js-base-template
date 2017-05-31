/* eslint-disable no-unused-expressions */

const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const runTest = require('./index.js');

chai.use(sinonChai);

describe('runTest', () => {
  beforeEach(() => {
    sinon.stub(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('Should call \' runTest()\' and console log Hello, World!', (done) => {
    runTest();
    done();
  });
});
