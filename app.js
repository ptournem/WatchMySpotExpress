var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var Fingerprint = require('express-fingerprint')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var spotRouter = require('./routes/spot');
var chatRouter = require('./routes/chat');
var searchRouter = require('./routes/search');
var authRouter = require('./routes/auth');
var logoutRouter = require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  key : 'session_id',
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


// middleware pour avoir une empreinte du client
app.use(Fingerprint({
    parameters:[
        Fingerprint.useragent,
        Fingerprint.acceptHeaders,
    ]
}))

// on ajoute la session disponible dans ejs
app.use((req,res,next)=>{
  res.locals.session = req.session;
  return next();
})

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/spot', spotRouter);
app.use('/chat', chatRouter);
app.use('/search', searchRouter);
app.use('/auth', authRouter);
app.use('/logout',logoutRouter);

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
