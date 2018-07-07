import React from 'react';
import styled from 'styled-components';

const Media = styled.span`
  display: block;
  margin: 0 5px 5px 0;
`;

const Img = styled.img`
  display: block;
  width: 83px;
  height: 83px;
  border-radius: 2px;
`;

export default ({ pictureProps }) => (
  <Media>{pictureProps.map(img => <Img key={img.id} src={img.preview_url} />)}</Media>
);
