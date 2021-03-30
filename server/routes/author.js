var express = require('express');
var router = express.Router();
var fs = require('fs');


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  client.close();
});

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log('Connected successfully to server');
  const db = client.db(dbName);
    client.close();
  })

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
