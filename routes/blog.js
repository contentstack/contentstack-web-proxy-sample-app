/**
 * Module dependencies.
 */

const express = require('express');

const router = express.Router();
const { getDefaultEntries, proxyRequest } = require('../utils');

// Below middleware method will render the list of latest blogs on home page from our proxy repsonse

router.get('/', getDefaultEntries, proxyRequest, (req, res, next) => {
  res.render('pages/blog.html', { defaultEntries: res.default, ...res.data });
  next();
});

// Below middleware method will render a particular blog when clicked on see more option

router.get('/:url', getDefaultEntries, proxyRequest, (req, res, next) => {
  const blogPage = { defaultEntries: res.default, ...res.data };

  // Below query will match the url from blogs entry as well as the browser url and save the result in variable 'dataContent'

  const dataContent = blogPage.entries.find((blog) => blog.url === `/${req.params.url}`);
  res.render('pages/blogpage.html', { content: dataContent });
  next();
});


module.exports = router;
