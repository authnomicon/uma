/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../../../../com/protection/permission-registration/http/service');


describe('protection/permission-registration/http/service', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/http/Service');
    expect(factory['@path']).to.equal('/uma/permission');
  });
  
  it('should create service', function() {
    function createHandler() {};
  
    var service = factory(createHandler);
    
    expect(service).to.be.a('function');
    expect(service.length).to.equal(3);
  });
  
});
