import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Archive</h1>
      <Link to="challenges/2018-08-21">
        2018-08-21: React Hooks - Stopwatch
      </Link>
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
