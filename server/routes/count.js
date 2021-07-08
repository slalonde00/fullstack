var express = require('express');
var router = express.Router();



var fs = require('fs');

let file = fs.readFileSync('./quotes.json').toString();
let lines = file.split('');

function countQuotes(filename = '') {
    fs.existsSync(filename)
    let seperateur = '}'
    calculSeparateurNumber = (file.lastIndexOf('}'));
    return (calculSeparateurNumber);
}


router.get('/count', function (req, res, next) {
    const count = countQuotes('./quotes.json');
    res.render('count', { quote: count });
});
module.exports = router;
