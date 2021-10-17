/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../../../com/configuration/http/service');


describe('configuration/http/service', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/http/Service');
    expect(factory['@path']).to.equal('/.well-known/uma-configuration');
  });
  
  it('should create service', function() {
    function configurationHandler() {};
  
    var service = factory(configurationHandler);
    
    expect(service).to.be.a('function');
    expect(service.length).to.equal(3);
  });
  
});
