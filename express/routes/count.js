var express = require('express');
var router = express.Router();
var list = require('./quotes.json');
var fs = require('fs');


router.get('/quote/count', function(req, res, next) {
    res.render('count',{ title: 'Express' });
  });
  module.exports = router;
