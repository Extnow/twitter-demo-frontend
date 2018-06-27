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

const footerLinks = [
  {
    id: 1,
    link: '/about',
    text: 'About',
  },
  {
    id: 2,
    link: '/help',
    text: 'Help Center',
  },
  {
    id: 3,
    link: '/terms',
    text: 'Terms',
  },
  {
    id: 4,
    link: '/privacy',
    text: 'Privacy policy',
  },
  {
    id: 5,
    link: '/cookies',
    text: 'Cookies',
  },
  {
    id: 6,
    link: '/advertising',
    text: 'Ads',
  },
  {
    id: 7,
    link: '/info',
    text: 'Info',
  },
];

export default () => (
  <Wrapper>
    <Copyright>
      © Twitter,
      {getYear(new Date())}
    </Copyright>
    {footerLinks.map(links => (
      <StLink key={links.id} to={links.link}>
        {links.text}
      </StLink>
    ))}
  </Wrapper>
);
