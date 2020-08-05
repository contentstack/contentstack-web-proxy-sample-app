/**
 * Module dependencies.
 */


const app = require('express')();
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');


const express = require('express');
const path = require('path');

dotenv.config({
  path: './.env',
});

app.set('view engine', 'html');

nunjucks.configure(['views/'], {
  autoescape: false,
  express: app,
});

app.use(express.static(path.join(__dirname, '/public')));


require('./routes')(app);


app.listen(process.env.PORT, () => {
  console.log(`Start your browser on port ${process.env.PORT}`);
});
