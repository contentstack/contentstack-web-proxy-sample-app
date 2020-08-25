// mention content-type uid below for both child & parent stack

module.exports = {
  contentstack: {
    parentStack: {
      defaultContentTypes: ['header', 'footer', 'home_proxy', 'blog_page_heading'],
      defaultLocale: 'en-us',
      childStack: {
        childStackEntries: {
          blogContentTypeUid: 'blogs',
        },
      },
    },
  },
};
