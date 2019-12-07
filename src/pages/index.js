/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

const Speakers = ({ data }) => {
  return (
    <Layout>
      <ul css={tw`flex flex-wrap list-none p-0`}>
        {data.allWordpressWpSpeakers.edges.map(({ node }) => {
          return (
            <li css={tw`w-full md:w-1/4  `} key={node.wordpress_id}>
              <Link
                css={tw`flex justify-start items-center content-center md:flex-col no-underline hover:bg-blue-200 mb-3 md:my-4  md:p-4`}
                to={node.path}
              >
                <img
                  css={tw`rounded-full`}
                  src={node.avatar_urls.wordpress_96}
                />
                <p css={tw`ml-4 text-center text-2xl text-gray-800`}>
                  {node.title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
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
          path
          avatar_urls {
            wordpress_96
          }
        }
      }
    }
  }
`;

export default Speakers;
