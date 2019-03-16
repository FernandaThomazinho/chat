var express = require('express');

module.exports = function() {
  var app = express();

  // Environment variables
  app.set('port', 3000);

  // Middlewares
  app.use(express.static('./public'));


  return app;
}
