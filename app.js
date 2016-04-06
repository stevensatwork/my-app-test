"use strict";

var express = require('express');
var connect = require('connect');

var errorhandler = require('errorhandler')
var url = require('url');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
var conn = connect();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	conn.use(errorhandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`);
});