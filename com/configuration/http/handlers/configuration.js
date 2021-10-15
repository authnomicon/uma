// https://docs.kantarainitiative.org/uma/rec-uma-core.html#am-endpoints
exports = module.exports = function(parse, authenticate) {
  
  function configuration(req, res, next) {
    res.json({ version: '1.0' })
  }
  
  
  return [
    configuration
  ];
};

exports['@require'] = [
];
