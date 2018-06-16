import React from "react";
import styled from "styled-components";
// img
import tickLogo from "./../img/Tick.svg";
import locationIcon from "./../img/Icon_Location.svg";
import linkIcon from "./../img/Icon_Link.svg";
import joinedIcon from "./../img/Icon_Joined.svg";

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

const Username = styled.span`
  font-size: 14px;
  margin-right: 8px;
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

const InfoItem = styled.li`
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
  background: #1da1f2;
  border-radius: 100px;
  padding: 11px 34px 11px 34px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ButtonMessage = styled.button`
  background: #1da1f2;
  border-radius: 100px;
  padding: 11px 34px 11px 34px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ProfileInfo = function() {
  return (
    <div>
      <AvatarBig>
        <AvatarBigIcon
          src={process.env.PUBLIC_URL + "/img/AvatarBig.png"}
          srcSet={process.env.PUBLIC_URL + `${"/img/AvatarBigRetina.png"} 2x`}
          alt="avatar"
        />
      </AvatarBig>
      <Title>
        <ProfileLink href="">Every Interaction</ProfileLink>
        <img src={tickLogo} alt="tick" />
      </Title>
      <Header>
        <Username>@EveryInteract</Username>
        <span>Follows you</span>
      </Header>
      <Bio>
        UX Design studio focussed problem solving creativity. Design to us is how can
        we make things *work* amazing.
      </Bio>
      <Info>
        <InfoItem>
          <img src={locationIcon} alt="" />
          <InfoText>London, UK</InfoText>
        </InfoItem>
        <InfoItem>
          <img src={linkIcon} alt="" />
          <InfoLink href="">everyinteraction.com</InfoLink>
        </InfoItem>
        <InfoItem>
          <img src={joinedIcon} alt="" />
          <InfoText>Joined May 2008</InfoText>
        </InfoItem>
      </Info>
      <Buttons>
        <ButtonTweet>Tweet to</ButtonTweet>
        <ButtonMessage>Message</ButtonMessage>
      </Buttons>
    </div>
  );
};

export default ProfileInfo;
