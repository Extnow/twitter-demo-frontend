// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Follower = styled(Link)`
  display: block;
  margin: 0 5px 5px 0;
  transition: box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }
`;

const Img = styled.img`
  display: block;
  width: 48px;
  height: 48px;
`;

export default ({
  to,
  src,
  srcSet,
  fullName,
}: {
  to: string,
  src: string,
  srcSet: string,
  fullName: string,
}) => (
  <Follower to={`/${to}`}>
    <Img src={src} srcSet={srcSet} alt={fullName} />
  </Follower>
);
