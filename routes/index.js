// routes

module.exports = (app) => {
  app.use('/', require('../middleware'));
  app.use('/', require('./home'));
  app.use('/contact', require('./contact'));
  require('./error')(app);
};
