'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _server = require('../../home/server.js');

var _server2 = _interopRequireDefault(_server);

var _server3 = require('../../codepen-overlay/server');

var _server4 = _interopRequireDefault(_server3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Express App
var app = (0, _express2.default)();

// Home

app.use('/', _server2.default);

// Codepen overlay.

app.use('/codepen-overlay', _server4.default);

// File not found.
app.use(function (req, res, next) {
  res.redirect(301, '/');
});

app.listen(8002, function () {
  console.log('Example app listening on port 8002!');
});