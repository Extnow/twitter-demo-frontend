import React from "react";
import styled from "styled-components";
// img
import tickLogo from "./../img/Tick.svg";

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
  width: 208px;
  height: 208px;
  border-radius: 100px;
  border: 1px solid #e7ecf0;
  overflow: hidden;
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

const ProfileInfo = function() {
  return (
    <div>
      <AvatarBig>
        <img
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
    </div>
  );
};

export default ProfileInfo;
