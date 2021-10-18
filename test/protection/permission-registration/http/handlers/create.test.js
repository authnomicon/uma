/* global describe, it, expect */

var expect = require('chai').expect;
var chai = require('chai');
var factory = require('../../../../../com/protection/permission-registration/http/handlers/create');


describe('protection/permission-registration/http/handlers/create', function() {
  
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
          ticket: '123-456'
        });
        done();
      })
      .listen();
  }); // should respond
  
});
