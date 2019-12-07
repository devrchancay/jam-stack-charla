const path = require('path');
const speakerPage = path.resolve('./src/templates/speaker-page.js');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      allWordpressWpSpeakers {
        edges {
          node {
            wordpress_id
            path
          }
        }
      }
    }
  `);

  if (results.errors) {
    throw results.errors;
  }

  const pages = results.data.allWordpressWpSpeakers.edges;
  pages.forEach(post => {
    createPage({
      path: post.node.path,
      component: speakerPage,
      context: {
        WordpressID: post.node.wordpress_id
      }
    });
  });
};
