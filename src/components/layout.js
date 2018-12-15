import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import SiteNav from './site_nav'
import Header from './header';
import Search from './search';
import {
  Container
} from './layout-constants';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            algolia {
              appId
              apiKey
              indexName
            }
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, algolia, menuLinks },
      },
    }) => (
      <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={title} />
        <SiteNav links={menuLinks} />
        <Search {...algolia} />
        <Container>
          {children}
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
