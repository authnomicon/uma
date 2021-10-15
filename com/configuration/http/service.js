exports = module.exports = function(configurationHandler) {
  var express = require('express');
  
  var router = new express.Router();
  router.get('/', configurationHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/.well-known/uma-configuration';
exports['@require'] = [
  './handlers/configuration'
];
