
/*
 * Error module export handler
 */

module.exports = function (app) {
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    var err = new Error(err);
    err.status = 404;
    next(err);
  });

  // development error handler
  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
          res.status(err.status || 500);
          res.render('pages/error.html');
        });
  }
};
