/**
 * Module dependencies.
 */

const app = require('express')();
const nunjucks = require('nunjucks');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const dotenv = require('dotenv'); // for env variable

dotenv.config({
  path: './.env',
});

var PORT = process.env.PORT || 4000;

/* View is the folder where all the html templates are stored nunjucks looks for that folder to render dynamic templates using the
 * data from Contentstack.
 */

app.set('view engine', 'html');

/*
 * Make sure to have all your static assets like css files , images ,logo within your "public" folder
 */

app.use(express.static(path.join(__dirname, '/public')));
app.use(logger('dev'));

nunjucks.configure(['views/'], {
  autoescape: false,
  express: app,
});

require('./routes')(app);

app.listen(PORT, () => {
  console.log('Running on port', PORT);
});
