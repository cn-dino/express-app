'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //res.set('Content-Type', 'text/plain');
  res.status(200).json('Hello');
});

module.exports = app;
