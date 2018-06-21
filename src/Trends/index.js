import React from "react";
import styled from "styled-components";
// components
import Trend from "./Trend";

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

const Trends = styled.div``;

export default function() {
  return (
    <Wrapper>
      <Header>
        <Title>United Kingdom Trends</Title>
        <Small>·</Small>
        <Change>Change</Change>
      </Header>
      <Trends>
        <Trend link="#BringYourDogToWorkDay" />
        <Trend link="#FridayFeeling" isCount={true} count="12.1K" />
        <Trend
          link="#BrexitAnniversary"
          description="It’s one year since the UK voted to leave the European Union"
        />
        <Trend link="HMS Queen Elizabeth" isCount={true} count="1,036" />
        <Trend link="Joe Budden" isCount={true} count="1,036" />
        <Trend link="Trident" isCount={true} count="6,136" />
      </Trends>
    </Wrapper>
  );
}
