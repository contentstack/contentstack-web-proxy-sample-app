/**
 * Module dependencies.
 */

const express = require('express');
const {getDefaultEntries, proxyRequest} = require('../utils');

const router = express.Router();

// router handler for contact page

router.get('/', getDefaultEntries, proxyRequest, (req, res, next) => {
  res.render('pages/contact.html', {defaultEntries: res.default, ...res.data});
});

module.exports = router;
