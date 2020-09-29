/**
 * Module dependencies.
 */

const express = require('express');
const { getDefaultEntries, proxyRequest } = require('../utils');

const router = express.Router();

/**
 * Below middleware method will render the home page content as well as latest blogs from our Stack A as a proxy response
 * res.data will get the blogs response from Stack A and render latest blogs on your home page .
 */

router.get('/', getDefaultEntries, proxyRequest, (req, res, next) => {
  res.render('pages/home.html', { defaultEntries: res.default, ...res.data });
  next();
});

module.exports = router;
