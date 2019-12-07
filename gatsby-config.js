module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: '2019.guayaquil.wordcamp.org',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        excludedRoutes: [
          '**/v2/themes',
          '**/v2/settings',
          '**/v2/block-renderer',
          '**/v2/search',
          '**/v2/comments',
          '**/v2/users',
          '**/v2/users/me',
          '**/v2/tags',
          '**/v2/statuses',
          '**/v2/blocks',
          '**/v2/posts'
        ]
      }
    }
  ]
};
