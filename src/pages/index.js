import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = (props) => {
  console.log(props);
  return (
    <Layout>
      <h1>Friday Challenges</h1>
      <Link to="challenge">A Challenge</Link>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
