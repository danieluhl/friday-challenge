/*
  Header Component
*/

import React, { Component } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import {
  Link,
} from './layout-constants';
import {
  PageTitle
} from './headings';
import styled from 'styled-components';

const HEADER_BG = '#ff6633';

const Header = styled.header`
  height: 75px;
  color: #fff;
  background-color: ${HEADER_BG};
  border-bottom: 5px solid #c6cde2;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  .Header {
    &-left,
    &-right {
      height: 70px;
    }
    &-left {
      flex: 3;
      position: relative;
      background: inherit;
      padding: 20px 0 20px 50px;
      z-index: 2;
      &::after {
        content: '';
        position: absolute;
        top: -25%;
        right: -50px;
        width: 100px;
        height: 150%;
        background-color: ${HEADER_BG};
        box-shadow: 5px 0px 3px rgba(0, 0, 0, .1);
        z-index: 1;
        transform: skew(-35deg);
      }
    }
    &-right {
      flex: 1;
      flex-basis: 300px;
      max-width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ff7644;
      background-color: rgba(255, 255, 255, .1);
      padding-left: 100px;
    }
  }
`;

const Navbar = styled.div`
  .netlify-identity {
    &-menu,
    &-item {
      list-style: none;
    }
    &-menu {
      margin: 0;
      height: 40px;
    }
    &-item {
      display: inline-block;
      margin: 0 10px;
      a {
        position: relative;
        display: block;
        padding: 5px 20px;
        color: #fff;
        border: 2px solid #ffcc33;
        font-size: 13px;
        text-align: center;
        text-decoration: none;
        overflow: hidden;
        transition: color .5s ease;
        &::after {
          content: "";
          position: absolute;
          height: 0%;
          left: 50%;
          top: 50%;
          width: 150%;
          z-index: -1;
          background-color: #ffcc33;
          transform: translateX(-50%) translateY(-50%);
          transition: height .5s ease, color .5s ease;
        }
        &:hover {
          color: #232323;
          &::after {
            height: 450%;
          }
        }
    }
  }
`

class HeaderComponent extends Component {
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
      <Header>
        <div className="Header-left">
          <Link
            to="/"
          >
            <PageTitle>
              {siteTitle}
            </PageTitle>
          </Link>
        </div>
        <div className="Header-right">
          <Navbar data-netlify-identity-menu />
        </div>
      </Header>
    )
  }
}

export default HeaderComponent;
