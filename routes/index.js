// routes

module.exports = (app) => {
  app.use('/', require('../middleware'));
  app.use('/', require('./home'));
  require('./error')(app);
};
