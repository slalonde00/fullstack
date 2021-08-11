

const { count } = require('console');
var cors = require('cors');

var express = require('express');
var cors = require('cors');

var router = express.Router();
var fs = require('fs');
router.use(cors());

let file = fs.readFileSync('./quotes.json').toString();
let lines = file.split('},');


function countQuotes(filename = '') {
  fs.existsSync(filename)
  let seperateur = '}'
  calculSeparateurNumber = (file.lastIndexOf('}'));
  return (calculSeparateurNumber);
}

findauthor = (filename = './quotes.json') => {
  fs.existsSync(filename)
  let file = fs.readFileSync('./quotes.json').toString();
  let lines = file.split('}');
  let authorindex = file.indexOf('"author":"')+1;
  let endStringindex = file.indexOf('}');
  let authorname = file.split(authorindex, endStringindex); 
  /*let foundOn = []
  for (i = 0; i < countQuotes - 1; i++) {
      if (lines[i].includes(authorname)) {
          foundOn.push(lines[i]);
          return foundOn[i];
      }
  }*/
  return authorname;
}

test = (filename = './quotes.json') => {
  fs.existsSync(filename)
  let file = fs.readFileSync('./quotes.json');
  return file;
}


function readJSON(filename = '') {
  fs.existsSync(filename)
  return fs.readFileSync(filename).toString();

}




findQuote = (searchFor) => {
    let file = fs.readFileSync('./quotes.json').toString();
    let lines = file.split('}');
    for (i = 0; i < lines.length - 1; i++) {
        if (lines[i].includes(searchFor)) {
            return lines[i];
            
        }
    }
}

router.get(`/:searchFor`, function (req, res, next) {
    const found =findauthor();
    res.render('author', { find: found });

}

);

module.exports = router;
