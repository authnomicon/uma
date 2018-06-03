exports = module.exports = function(createHandler) {
  var express = require('express');
  var router = new express.Router();
  
  // https://docs.kantarainitiative.org/uma/rec-uma-core-v1_0_1.html#register-permission
  
  router.post('/', createHandler);
  
  return router;
};

exports['@implements'] = [ 'http://i.bixbyjs.org/http/Service' ];
exports['@path'] = '/uma/pr';
exports['@require'] = [
  './handlers/create'
];
