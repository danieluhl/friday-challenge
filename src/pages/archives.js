import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const Archives = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <Layout>
        <header>
          <h1>Archive</h1>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link to={node.fields.slug} key={node.frontmatter.title}>
              <h3>
                <span>[{node.frontmatter.date}]</span> {node.frontmatter.title}
              </h3>
            </Link>
          ))}
        </header>
      </Layout>
    )}
  />
)

export default Archives
