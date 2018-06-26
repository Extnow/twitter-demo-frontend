import React from 'react';
import styled from 'styled-components';

const Photo = styled.span`
  display: block;
  margin: 0 5px 5px 0;
`;

const Img = styled.img`
  display: block;
  width: 83px;
  height: 83px;
  border-radius: 2px;
`;

export default ({ src, srcSet, name }) => (
  <Photo>
    <Img src={src} srcSet={srcSet} alt={name} />
  </Photo>
);
