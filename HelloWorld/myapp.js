//require express and path
var express = require('express')
var path = require('path')
//require your route js files
var routes = require('./routes/index')
//make the express app
var app = express()


// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

//tell the app which routes to use. actual route files have the code
app.use('/', routes);


//this makes an object that can be used anywhere else
module.exports = app;