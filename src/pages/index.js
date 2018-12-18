import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node
  const { title, date } = frontmatter
  return (
    <Layout>
      <h1>The latest challenge: {title}</h1>
      <div>{date}</div>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
