import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components";

import Layout from '../components/layout'

const Title = styled.h2`
  font-family: 'Press Start 2P';
  color: teal;
`;

const ChallengePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title } = frontmatter
  return (
    <Layout>
      <Title>{title}</Title>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default ChallengePage

export const challengePageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
