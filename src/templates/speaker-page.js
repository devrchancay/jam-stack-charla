import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const PageSpeaker = ({ data }) => (
  <Layout>
    <img
      src={data.wordpressWpSpeakers.avatar_urls.wordpress_96}
      alt={data.wordpressWpSpeakers.title}
    />
    <h1>{data.wordpressWpSpeakers.title}</h1>
    <p dangerouslySetInnerHTML={{ __html: data.wordpressWpSpeakers.content }} />
  </Layout>
);

export const query = graphql`
  query($WordpressID: Int!) {
    wordpressWpSpeakers(wordpress_id: { eq: $WordpressID }) {
      avatar_urls {
        wordpress_96
      }
      title
      content
    }
  }
`;

export default PageSpeaker;
