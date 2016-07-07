const Express = require('express');
const Fs = require('fs');
const Path = require('path');


var Router = Express.Router();

// Router.use('render engine', 'pug');

// Prevent the outside world from reading our server script.
Router.get('/server.js', (req, res, next) => {
  res.redirect(301, '/')
})


var jsFile = Fs.readFileSync(Path.join(__dirname, './index.js'), 'utf-8');
var templateFile = Fs.readFileSync(Path.join(__dirname, './index.pug'), 'utf-8');

Router.get('/index.js', (req, res, next) => {
  console.log(req.query);
  res.send('hello')
})


// Serve all the other files to the outside world.
Router.use(Express.static(__dirname))

module.exports = Router;

