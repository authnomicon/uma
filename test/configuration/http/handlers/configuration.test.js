/* global describe, it, expect */

var expect = require('chai').expect;
var chai = require('chai');
var factory = require('../../../../com/configuration/http/handlers/configuration');


describe('configuration/http/handlers/configuration', function() {
  
  var handler;
  
  before(function() {
    handler = factory();
  });
  
  it('should respond', function(done) {
    chai.express.use(handler)
      .finish(function() {
        expect(this).to.have.status(200);
        // TODO: add headers assertion
        expect(this).to.have.body({
          version: '1.0'
        });
        done();
      })
      .listen();
  }); // should respond
  
});
