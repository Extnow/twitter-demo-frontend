// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #1da1f2;
  font-size: 14px;
  margin-bottom: 8px;

  &:before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    margin-right: 12px;
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WrapperList = styled.div`
  margin: 20px 0;
`;

export default ({
  to,
  title,
  icon,
  children,
}: {
  to: string,
  title: string,
  icon: string,
  children: React.Node,
}) => (
  <WrapperList>
    <StLink to={to} icon={icon}>
      {title}
    </StLink>
    <Wrapper>{children}</Wrapper>
  </WrapperList>
);
