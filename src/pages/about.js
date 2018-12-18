import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title },
      },
    }) => (
      <Layout>
        <h1>Well, hello, {title}.</h1>
        <p>
          Welcome to Friday Challenge, a site maintained by the fine folks at
          Wayfair for presenting frontend code challenges that edify and
          inspire.
        </p>
        <p>
          Every single Friday — well, almost every Friday — you'll find a new
          challenge posted here. At the end of the day, we'll pick a winner and
          some number or runners-up. Give it a try. Or explore{' '}
          <Link to="/">the archives</Link>.
        </p>
        <p>Best of luck!</p>
      </Layout>
    )}
  />
)

export default AboutPage
