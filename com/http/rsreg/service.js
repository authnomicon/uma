exports = module.exports = function(listHandler, createHandler, readHandler, updateHandler, deleteHandler) {
  var express = require('express');
  var router = new express.Router();
  
  // https://tools.ietf.org/html/draft-hardjono-oauth-resource-reg-07
  // https://docs.kantarainitiative.org/uma/rec-oauth-resource-reg-v1_0_1.html
  
  router.get('/resource_set', listHandler);
  router.post('/resource_set', createHandler);
  router.get('/resource_set/:id', readHandler);
  router.put('/resource_set/:id', updateHandler);
  router.delete('/resource_set/:id', deleteHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/uma/ResourceRegistrationService'
];
exports['@path'] = '/rs';
exports['@require'] = [
  './handlers/list',
  './handlers/create',
  './handlers/read',
  './handlers/update',
  './handlers/delete'
];
