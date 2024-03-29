var express = require('express');
var load = require('express-load');

module.exports = function() {
  var app = express();

  // Environment variables
  app.set('port', 3000);

  // Middlewares
  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  load('models', {cwd: 'app'})
      .then('controllers')
      .then('routes')
      .into(app);

  return app;
}
