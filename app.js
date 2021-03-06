var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');
var typeRouter = require('./routes/type');
var tagRouter = require('./routes/tag');
var typeDeleteRouter = require('./routes/types/delete');
var tagDeleteRouter = require('./routes/tags/delete');
var blogDeleteRouter = require('./routes/blogs/delete');
var blogNewRouter = require('./routes/blogs/new');
var typeNewRouter = require('./routes/types/new');
var tagNewRouter = require('./routes/tags/new')
var blogUpdateRouter = require('./routes/blogs/update');
var tagUpdateRouter = require('./routes/tags/update');
var typeUpdateRouter = require('./routes/types/update');

var app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();

});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/',blogRouter);
app.use('/',typeRouter);
app.use('/',tagRouter);
app.use('/types',typeDeleteRouter);
app.use('/tags',tagDeleteRouter);
app.use('/blogs',blogDeleteRouter);
app.use('/blogs',blogNewRouter);
app.use('/types',typeNewRouter);
app.use('/tags',tagNewRouter);
app.use('/blogs',blogUpdateRouter);
app.use('/tags',tagUpdateRouter);
app.use('/types',typeUpdateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
