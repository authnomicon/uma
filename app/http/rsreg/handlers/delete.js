exports = module.exports = function(parse, authenticate) {
  
  function validate(req, res, next) {
    console.log('UMA1 DELETE');
    console.log(req.params)
  }
  
  
  return [
    //authenticate('bearer'),
    validate
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/parse'
  //'http://i.bixbyjs.org/http/middleware/authenticate'
];
