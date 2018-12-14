import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'

class Header extends Component {
  componentDidMount() {
    netlifyIdentity.init({
      APIUrl: 'https://www.friday-challenge.com/.netlify/identity',
    })
    netlifyIdentity.on('login', user => {
      this.setState({ user })
    })
    netlifyIdentity.on('logout', () => this.setState({ user: null }))
  }

  render() {
    const { siteTitle } = this.props
    return (
      <div
        style={{
          background: 'rebeccapurple',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <div data-netlify-identity-menu />
        </div>
      </div>
    )
  }
}

export default Header
