// app.js

// BASE SETUP
// ======================================================================
var express = require('express');
var app = express();
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var url = require('url');
var db = require('./lib/db');
var router = require('./app/route.js');

var port = process.env.PORT || 3000;
// connect database
db.connect();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.set('port', port);
// MIDDLEWARE
// ======================================================================
// base middleware
app.use(favicon('/public/img/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// route
router.route(app);


// ERROR
// ======================================================================
// 404 error
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.sendfile('./public/error.html');
    });
}

// production error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.sendfile('./public/error.html');
});

app.listen(port, function(){
    console.log('Server listening on prot: ' + port);
});
