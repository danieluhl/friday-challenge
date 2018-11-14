import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <h1>Archive</h1>
      {edges.map(({ node }) => (
        <Link to={node.fields.slug}>
          <h3>
            <span>[{node.frontmatter.date}]</span> {node.frontmatter.title}
          </h3>
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

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
`
