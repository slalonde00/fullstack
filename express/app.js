var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var list = require('./quotes.json');
var fs = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

let file = fs.readFileSync('./quotes.json').toString();
let lines = file.split('}');

function countQuotes(filename = '') {
  fs.existsSync(filename)
  let seperateur = ','
  calculSeparateurNumber = (file.lastIndexOf('}'));
  return (calculSeparateurNumber);
}

app.get('/quote/count', function(req, res, next) {
  res.send(countQuotes('./quotes.json'));
});

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


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
