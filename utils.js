/**
 * Module dependencies.
 */

const axios = require('axios');
const configVars = require('./config');

// get default entries as mentioned in config file

const getEntries = async (contentTypeUid, skip = 0, data = []) => {
  let Entries;
  const options = {
    method: 'GET',
    headers: {
      api_key: process.env.PARENT_STACK_APIKEY,
      access_token: process.env.PARENT_STACK_DELIVERYTOKEN,
    },
  };
  try {
    const response = await axios(
      `${process.env.PROXYURL}/v3/content_types/${contentTypeUid}/entries?environment=${process.env.PARENT_STACK_PUBLISH_ENV}&locale=en-us&include_count=true&skip=${skip}`,
      options,
    );
    Entries = await response.data;
  } catch (err) {
    return Promise.reject(err);
  }

  skip = Entries.entries.length;
  data = [...data, ...Entries.entries];

  if (skip === Entries.count) {
    return Promise.resolve(data);
  }
  if (Entries.entries.length < Entries.count) {
    getEntries(contentTypeUid, R.entries.length, data);
  }
};

const getDefaultEntries = async function (req, res, next) {
  res.default = {};
  for (
    let i = 0;
    i < configVars.contentstack.parentStack.defaultContentTypes.length;
    i++
  ) {
    try {
      res.default[
        configVars.contentstack.parentStack.defaultContentTypes[i]
      ] = await getEntries(
        configVars.contentstack.parentStack.defaultContentTypes[i],
      );
    } catch (err) {
      console.log(err);
    }
  }
  next();
};

// get proxy entries function

const proxyRequest = (req, res, next) => {
  const headers = {
    api_key: process.env.CHILD_STACK_APIKEY,
    access_token: process.env.CHILD_STACK_DELIVERYTOKEN,
  };

  axios({
    method: 'get',
    url: `${process.env.PROXYURL}/v3/content_types/${configVars.contentstack.parentStack.childStack.childStackEntries.blogContentTypeUid}/entries?environment=${process.env.CHILD_STACK_PUBLISH_ENV}`,
    headers,
  })
    .then((response) => {
      res.data = response.data;
      next();
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getDefaultEntries,
  proxyRequest,
};
