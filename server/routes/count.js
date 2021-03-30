var express = require('express');
var router = express.Router();



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
