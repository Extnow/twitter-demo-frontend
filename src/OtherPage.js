import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default ({ match }) => (
  <Wrapper>
    <h1>
      page
      {match.url}
    </h1>
  </Wrapper>
);
