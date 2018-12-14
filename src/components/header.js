import React from 'react';
import {
  Container,
  Link
} from './layout-constants';
import {
  PageTitle
} from './headings';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #654ea3;
  background: -webkit-linear-gradient(to right, #654ea3, #9149f4);
  background: linear-gradient(to right, #654ea3, #9149f4);
  margin-bottom: 1.45rem;
`;

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Container>
        <PageTitle>
          <Link to="/">
            {siteTitle}
          </Link>
        </PageTitle>
        {/* Not final copy! */}
        <p>Keep your Javascript skills sharp with these weekly brain teasers</p>
      </Container>
    </Wrapper>
  );
};

export default Header;
