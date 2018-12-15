/*
  File to contain reusable components
*/

import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

export const BREAKPOINTS = {
  lgDesktop: 1280,
  desktop: 992,
  tablet: 768,
  phone: 576,
}

export const themes = {
  primary: {
    background: "#b936ff",
    backgroundHover: "rebeccapurple"
  },
  secondary: {
    background: "ff36e1"
  }
};

export const Container = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  max-width: 960px;
  @media(${BREAKPOINTS.lgDesktop}) {
    max-width: 1200px;
  }
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;
`

export const Button = styled.button`
  color: #fff;
  background-color: ${props => props.theme.background};
  padding: 1em 2em;
  font-size: 15px;
  transition: background-color .2s;
  &:hover {
    background-color: ${props => props.theme.backgroundHover};
  }
`