module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: '2019.guayaquil.wordcamp.org',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true
      }
    }
  ]
};
