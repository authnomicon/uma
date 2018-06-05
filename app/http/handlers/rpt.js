exports = module.exports = function(parse, authenticate) {
  
  // NOTE: This is more or less duplicative of the oauth token endpoint, and shoudl
  // have been a grant.   UMA 2.0 corrected this.
  
  function validate(req, res, next) {
    console.log('UMA PERM CREATE');
    console.log(req.body)
    
    
    res.json({ rpt: 'xcasdfasdfasdf' })
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
