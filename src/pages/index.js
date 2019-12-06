import React from 'react';
import { graphql } from 'gatsby';

const Speakers = ({ data }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        justifyContent: 'center'
      }}
    >
      {data.allWordpressWpSpeakers.edges.map(({ node }) => {
        return (
          <li
            key={node.wordpress_id}
            style={{
              width: '33%',
              display: 'flex',
              justifyItems: 'center',
              alignItems: 'center',
              marginBottom: '1rem'
            }}
          >
            <img
              style={{ borderRadius: '50%' }}
              src={node.avatar_urls.wordpress_96}
            />
            <p style={{ paddingLeft: '10px' }}>{node.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export const query = graphql`
  {
    allWordpressWpSpeakers {
      edges {
        node {
          wordpress_id
          slug
          title
          avatar_urls {
            wordpress_96
          }
        }
      }
    }
  }
`;

export default Speakers;
