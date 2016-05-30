'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '../../content/images/favicon.ico')));
app.use(_express2.default.static(_path2.default.join(__dirname, '../../content')));

var server = app.listen(8002, function () {
  console.log('Example app listening on port 8002!');
});