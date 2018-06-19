import React from "react";
import styled from "styled-components";
// components
import RecommendedUser from "./RecommendedUser";
import iconPeople from "./img/icon-people.svg";

const Wrapper = styled.div`
  margin-top: 10px;
  background-color: #fff;
  padding: 15px;
`;

const Header = styled.header``;

const Title = styled.h3`
  display: inline;
  color: #14171a;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Refresh = styled.button`
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

const All = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const Small = styled.small`
  margin: 0 5px;
`;

const Footer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 13px;
  color: #1da1f2;
  margin-top: 24px;

  &:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 12px;
    margin-right: 6px;
    background-image: url(${iconPeople});
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default function() {
  return (
    <Wrapper>
      <Header>
        <Title>Who to follow</Title>
        <Small>·</Small>
        <Refresh>Refresh</Refresh>
        <Small>·</Small>
        <All href="#">All</All>
      </Header>
      <RecommendedUser
        src={process.env.PUBLIC_URL + "/img/avatar-2.png"}
        srcSet={process.env.PUBLIC_URL + "/img/avatar-2-retina.png 2x"}
        name="user-2"
        fullName="AppleInsider"
        userName="@appleinsider"
      />
      <RecommendedUser
        src={process.env.PUBLIC_URL + "/img/avatar-3.png"}
        srcSet={process.env.PUBLIC_URL + "/img/avatar-3-retina.png 2x"}
        name="user-2"
        isTicked={true}
        fullName="Creode"
        userName="@Creode"
      />
      <RecommendedUser
        src={process.env.PUBLIC_URL + "/img/avatar-4.png"}
        srcSet={process.env.PUBLIC_URL + "/img/avatar-4-retina.png 2x"}
        name="user-2"
        fullName="Epiphany Search"
        userName="@Epiphanysearch"
      />
      <Footer href="#">Find people you know</Footer>
    </Wrapper>
  );
}
