var createError = require('http-errors');
var express = require('express');
var path = require('path');
var list = require('./quotes.json');
var fs = require('fs');

var app = express();

let file = fs.readFileSync('./quotes.json').toString();
let lines = file.split('}');

function countQuotes(filename = './quotes.json') {
    fs.existsSync(filename)
    calculSeparateurNumber = (file.lastIndexOf('}'));
    return (calculSeparateurNumber);
}

countQuotes('./quotes.json');

findQuote = (name = '') => {
    let searchFor = name
    let foundOn = []
    for (i = 0; i < lines.length - 1; i++) {
        if (lines[i].includes(searchFor)) {
            foundOn.push(lines[i]);
            return foundOn[0];
        }
    }
}


function readJSON(filename = '') {
    fs.existsSync(filename)
    return fs.readFileSync(filename).toString();

}


