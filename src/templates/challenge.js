import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const ChallengePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title } = frontmatter
  return (
    <Layout>
      <h1>{title}</h1>
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
