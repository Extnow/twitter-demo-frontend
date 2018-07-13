// @flow

import React from 'react';
import styled from 'styled-components';
// components
import Trend from './Trend';

const Wrapper = styled.div`
  margin-top: 10px;
  background-color: #fff;
  padding: 15px;
`;

const Header = styled.header`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  display: inline;
  color: #14171a;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Small = styled.small`
  margin: 0 5px;
`;

const Change = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 12px;
  color: #1da1f2;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const trends = [
  {
    id: 1,
    title: '#BringYourDogToWorkDay',
    description: null,
    count: null,
  },
  {
    id: 2,
    title: '#FridayFeeling',
    description: null,
    count: 12100,
  },
  {
    id: 3,
    title: '#BrexitAnniversary',
    description: 'It’s one year since the UK voted to leave the European Union',
    count: null,
  },
  {
    id: 4,
    title: 'HMS Queen Elizabeth',
    description: null,
    count: 1036,
  },
  {
    id: 5,
    title: 'Joe Budden',
    description: null,
    count: 1036,
  },
  {
    id: 6,
    title: 'Trident',
    description: null,
    count: 6136,
  },
];

export default () => (
  <Wrapper>
    <Header>
      <Title>United Kingdom Trends</Title>
      <Small>·</Small>
      <Change>Change</Change>
    </Header>
    {trends.map(trend => (
      <Trend
        key={trend.id}
        title={trend.title}
        description={trend.description}
        count={trend.count}
      />
    ))}
  </Wrapper>
);
