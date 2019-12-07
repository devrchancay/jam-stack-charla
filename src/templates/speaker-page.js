import React from 'react';
import { graphql } from 'gatsby';

const PageSpeaker = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

export const query = graphql`
  {
    wordpressWpSpeakers(wordpress_id: { eq: 1463 }) {
      avatar_urls {
        wordpress_96
      }
      title
      content
    }
  }
`;

export default PageSpeaker;
