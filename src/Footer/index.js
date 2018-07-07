import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getYear } from 'date-fns';

const Wrapper = styled.div`
  margin-top: 20px;
  background-color: transparent;
`;

const Copyright = styled.span`
  font-size: 13px;
  line-height: 18px;
  color: #718290;
  margin-right: 7px;
`;

const StLink = styled(Link)`
  display: inline-block;
  font-size: 13px;
  line-height: 18px;
  color: #718290;
  text-decoration: none;
  margin-right: 7px;

  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Wrapper>
    <Copyright>
      © Twitter,
      {getYear(new Date())}
    </Copyright>
    <StLink to="/about">About</StLink>
    <StLink to="/help">Help Center</StLink>
    <StLink to="/terms">Terms</StLink>
    <StLink to="/privacy">Privacy policy</StLink>
    <StLink to="/cookies">Cookies</StLink>
    <StLink to="/advertising">Ads</StLink>
    <StLink to="/info">Info</StLink>
  </Wrapper>
);
