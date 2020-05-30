var express = require('express');
var router = express.Router();


var fs = require('fs');

let file = fs.readFileSync('./quotes.json').toString();
let lines = file.split('}');

function countQuotes(filename = '') {
    fs.existsSync(filename)
    let seperateur = ','
    calculSeparateurNumber = (file.lastIndexOf('}'));
    return (calculSeparateurNumber);
}


router.get('/count', function(req, res, next) {
    res.render('count', {title= title, fs: {echo: countQuotes('./quotes.json')}});
  });
  module.exports = router;
