const Express = require('express');

var Router = Express.Router();

// Prevent the outside world from reading our server script.
Router.get('/server.js', (req, res, next) => {
  res.redirect(301, '/')
})

// Serve all the other files to the outside world.
Router.use(Express.static(__dirname))

module.exports = Router;

