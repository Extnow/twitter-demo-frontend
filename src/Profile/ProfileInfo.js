import React from "react";
import styled from "styled-components";
// img
import iconTick from "./../img/icon-tick.svg";
import iconLocation from "./../img/icon-location.svg";
import iconLink from "./../img/icon-link.svg";
import iconJoined from "./../img/icon-joined.svg";
// components
import Tweets from "./Tweets";

const Profile = styled.div`
  background-color: #e6ecf0;
  position: relative;
  font-family: Helvetica Neue, Helvetica, sans-serif;
`;

const Title = styled.h1`
  padding-top: 41px;
  margin: 0;
`;

const AvatarBig = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -179px;
  background-color: #fff;
  padding: 18px;
  border-radius: 100px;
  border: 1px solid #e7ecf0;
  overflow: hidden;
  z-index: 2;
`;

const AvatarBigIcon = styled.img`
  width: 174px;
  height: 174px;
`;

const ProfileLink = styled.a`
  color: #14171a;
  text-decoration: none;
  font-family: Helvetica;
  line-height: 22px;
  font-size: 22px;
  margin-right: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.h2`
  line-height: 21px;
  font-size: 12px;
  color: #697787;
  margin: 0;
  font-weight: normal;
`;

const Username = styled.a`
  text-decoration: none;
  font-size: 14px;
  margin-right: 8px;
  color: #697787;

  &:hover {
    text-decoration: underline;
  }
`;

const Bio = styled.p`
  padding: 13px 0;
  line-height: 20px;
  font-size: 14px;
  margin: 0;
`;

const Info = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Location = styled.li`
  display: flex;
  align-items: center;
`;

const Url = styled.li`
  display: flex;
  align-items: center;
`;

const Joined = styled.li`
  display: flex;
  align-items: center;
`;

const InfoLink = styled.a`
  margin-left: 13px;
  font-size: 14px
  line-height: 28px
  color: #1DA1F2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const InfoText = styled.span`
  margin-left: 13px;
  font-size: 14px
  line-height: 28px
  color: #697787;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 17px;
  justify-content: space-between;
`;

const ButtonTweet = styled.button`
  background-color: #4ab3f4;
  border-radius: 100px;
  padding: 11px 34px 11px 34px;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1da1f2;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }
`;

const ButtonMessage = styled.button`
  background-color: #4ab3f4;
  border-radius: 100px;
  padding: 11px 34px 11px 34px;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1da1f2;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }
`;

export default function() {
  return (
    <Profile>
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <AvatarBig>
              <AvatarBigIcon
                src={process.env.PUBLIC_URL + "/img/avatar-large.png"}
                srcSet={
                  process.env.PUBLIC_URL + `${"/img/avatar-large-retina.png"} 2x`
                }
                alt="avatar"
              />
            </AvatarBig>
            <Title>
              <ProfileLink href="">Every Interaction</ProfileLink>
              <img src={iconTick} alt="tick" />
            </Title>
            <Header>
              <Username a href="#">
                @EveryInteract
              </Username>
              <span>Follows you</span>
            </Header>
            <Bio>
              UX Design studio focussed problem solving creativity. Design to us is
              how can we make things *work* amazing.
            </Bio>
            <Info>
              <Location>
                <img src={iconLocation} alt="" />
                <InfoText>London, UK</InfoText>
              </Location>
              <Url>
                <img src={iconLink} alt="" />
                <InfoLink href="">everyinteraction.com</InfoLink>
              </Url>
              <Joined>
                <img src={iconJoined} alt="" />
                <InfoText>Joined May 2008</InfoText>
              </Joined>
            </Info>
            <Buttons>
              <ButtonTweet>Tweet to</ButtonTweet>
              <ButtonMessage>Message</ButtonMessage>
            </Buttons>
          </div>
          <div className="col-xs-6">
            <Tweets />
          </div>
        </div>
      </div>
    </Profile>
  );
}
