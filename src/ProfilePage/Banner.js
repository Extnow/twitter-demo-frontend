import React from 'react';
import styled from 'styled-components';

const Banner = styled.img`
  display: block;
  height: 380px;
  width: 100%;
  object-fit: cover;
`;

export default ({ userInfo }) => <Banner src={userInfo.header_static} alt="banner" />;
