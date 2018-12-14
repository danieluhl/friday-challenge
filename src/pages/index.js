import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from "styled-components";

import Layout from '../components/layout';

const Title = styled.h2`
  font-family: 'Press Start 2P';
  color: teal;
`;

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Title>Past Challenges</Title>
      {edges.map(({ node }) => (
        <Link to={node.fields.slug} key={node.frontmatter.title}>
          <h3>
            <span>[{node.frontmatter.date}]</span> {node.frontmatter.title}
          </h3>
        </Link>
      ))}
    </Layout>
  );
};

export default IndexPage;

export const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
