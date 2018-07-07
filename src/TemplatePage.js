import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default ({ match }) => (
  <React.Fragment>
    <Helmet>
      <title>{match.url} | Twitter</title>
    </Helmet>
    <Wrapper>
      <h1>page{match.url}</h1>
    </Wrapper>
  </React.Fragment>
);
