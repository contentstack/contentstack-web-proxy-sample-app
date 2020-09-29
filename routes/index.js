// routes

module.exports = function (app) {
  app.use('/', require('../middleware'));
  app.use('/', require('./home'));
  app.use('/', require('./blog'));
};
