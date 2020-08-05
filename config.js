// mention content-type uid below for both child & parent stack

module.exports = {
  contentstack: {
    parentStack: {
      DefaultContentTypes: ['header', 'amp_footer', 'home', 'blog_page_heading'],
      DefaultLocale: 'en-us',
      childStack: {
        childStackEntries: {
          blogContentTypeUid: 'blogs',
        },
      },
    },
  },
};
