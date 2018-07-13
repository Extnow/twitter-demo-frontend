// @flow

import * as React from 'react';
import styled from 'styled-components';

const MediaWrapper = styled.span`
  display: block;
  margin: 0 5px 5px 0;
`;

const Img = styled.img`
  display: block;
  width: 83px;
  height: 83px;
  border-radius: 2px;
`;

export default ({ media }: { media: Array<Object> }) => media.slice(0, 6).map(img => (
  <MediaWrapper>
    <Img key={img.id} src={img.preview_url} />
  </MediaWrapper>
));
