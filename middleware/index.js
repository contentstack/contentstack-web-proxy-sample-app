/**
 * Module dependencies.
 */

const express = require('express');

const {getDefaultEntries, proxyRequest} = require('../utils');

const router = express.Router();

// Below router method will fetch the header & footer from the default entries as mentioned in config.js

router.get('*', getDefaultEntries, proxyRequest, (req, res, next) => {
  const partialsData = {defaultEntries: res.default, ...res.data};
  res.locals.header = partialsData.defaultEntries.header[0];
  res.locals.footer = partialsData.defaultEntries.footer[0];
  next();
});

module.exports = router;
