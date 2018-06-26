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
        <Trend title="#BringYourDogToWorkDay" />
        <Trend title="#FridayFeeling" count={12100} />
        <Trend
          title="#BrexitAnniversary"
          description="It’s one year since the UK voted to leave the European Union"
        />
        <Trend title="HMS Queen Elizabeth" count={1036} />
        <Trend title="Joe Budden" count={1036} />
        <Trend title="Trident" count={6136} />
      </Trends>
    </Wrapper>
  );
}
