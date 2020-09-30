// mention content-type uid below for both child & parent stack

module.exports = {
  contentstack: {
    parentStack: {
      // Below provide the default content-type uid's in the arry for your sample app e.g. ['header','footer','home','blog_heading'] etc
      defaultContentTypes: ['header', 'footer', 'home', 'error','contact'],
      defaultLocale: 'en-us',
      childStack: {
        childStackEntries: {
          // Below provide the content-type uid for blogs as an entry from Stack B/Child Stack e.g. 'blogs'
          blogContentTypeUid: 'blogs',
        },
      },
    },
  },
};
