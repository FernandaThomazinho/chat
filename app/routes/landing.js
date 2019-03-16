module.exports = function(app) {
  var controller = app.controllers.landing;
  app.get('/', controller.index);
  app.get('/index', controller.index);
}
