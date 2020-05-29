var express = require('express');
var router = express.Router();


router.get('/count', function(req, res, next) {
    res.render('count',{ title: 'Express' });
  });
  module.exports = router;
