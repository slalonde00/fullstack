var express = require('express');
var router = express.Router();
const { count } = require('console');
var fs = require('fs');

/* GET home page. */

readJson = (filename = './quotes.json') => {
  fs.existsSync(filename)
  let file = fs.readFileSync('./quotes.json');
  return file;
}


router.get(`/:searchFor`, function (req, res, next) {
  //const found = findQuote(searchFor);
  const found = readJson();
  res.render('author', { find: found });

}

);
module.exports = router;
