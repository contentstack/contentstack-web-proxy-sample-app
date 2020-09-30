/**
 * Module dependencies.
 */

const express = require('express');
const { getDefaultEntries, proxyRequest } = require('../utils');

const router = express.Router();
/**
 *
 * Below router function will make a api/sdk call to Contentstack and fetch the "home" content-type for our home
 * page
 *
 */
router.get('/', getDefaultEntries, proxyRequest, (req, res, next) => {
  res.render('pages/home.html', { defaultEntries: res.default, ...res.data });
});

module.exports = router;
