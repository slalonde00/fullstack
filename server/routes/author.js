var express = require('express');
var router = express.Router();
var fs = require('fs');

const searchFor = '';



findQuote = (name) => {
    let file = fs.readFileSync('./quotes.json').toString();
    let lines = file.split('}');

    name = searchFor;
    let foundOn = []
    for (i = 0; i < lines.length - 1; i++) {
        if (lines[i].includes(name)) {
            foundOn.push(lines[i]);
            return foundOn[0];
        }
    }
}

router.get(`/${searchFor}`, function (req, res, next) {
    const found = findQuote(searchFor);
    res.render('author', { find: found });

});



module.exports = router;
