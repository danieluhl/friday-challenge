import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Friday Challenges</h1>
    <Link to="challenge">A Challenge</Link>
  </Layout>
);

export default IndexPage;
