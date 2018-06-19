import React from "react";
import styled from "styled-components";
// img
import iconTick from "./img/icon-tick.svg";
import iconLocation from "./img/icon-location.svg";
import iconLink from "./img/icon-link.svg";
import iconJoined from "./img/icon-joined.svg";
import iconFollowers from "./img/icon-followers.svg";
import iconPhotos from "./img/icon-photos.svg";
// components
import UserList from "./UserList";
import Follower from "./Follower";
import Photo from "./Photo";

const WrapperInfo = styled.div`
  margin: 40px 0 20px 0;
`;

const WrapperList = styled.div`
  margin: 20px 0;
`;

const Title = styled.h1`
  margin: 0;
`;

const Avatar = styled.div`
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

const AvatarImage = styled.img`
  display: block;
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

const Element = styled.li`
  display: flex;
  align-items: center;

  &:before {
    content: "";
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center center;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
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

const Button = styled.button`
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
    <div>
      <WrapperInfo>
        <Avatar>
          <AvatarImage
            src={process.env.PUBLIC_URL + "/img/avatar-large.png"}
            srcSet={
              process.env.PUBLIC_URL + `${"/img/avatar-large-retina.png"} 2x`
            }
            alt="avatar"
          />
        </Avatar>
        <Title>
          <ProfileLink href="#">Every Interaction</ProfileLink>
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
          <Element img={iconLocation}>
            <InfoText>London, UK</InfoText>
          </Element>
          <Element img={iconLink}>
            <InfoLink href="#">everyinteraction.com</InfoLink>
          </Element>
          <Element img={iconJoined}>
            <InfoText>Joined May 2008</InfoText>
          </Element>
        </Info>
        <Buttons>
          <Button>Tweet to</Button>
          <Button>Message</Button>
        </Buttons>
      </WrapperInfo>
      <WrapperList>
        <UserList
          title="6 Followers you know"
          url="/EveryInteract/followers_you_follow"
          icon={iconFollowers}
          isFollowers={true}
        >
          <Follower
            src={process.env.PUBLIC_URL + "/img/follower-1.png"}
            srcSet={process.env.PUBLIC_URL + "/img/follower-1-retina.png 2x"}
            name="follower-1"
            url="/follower-1"
          />
          <Follower
            src={process.env.PUBLIC_URL + "/img/follower-2.png"}
            srcSet={process.env.PUBLIC_URL + "/img/follower-2-retina.png 2x"}
            name="follower-2"
            url="/follower-2"
          />
          <Follower
            src={process.env.PUBLIC_URL + "/img/follower-3.png"}
            srcSet={process.env.PUBLIC_URL + "/img/follower-3-retina.png 2x"}
            name="follower-3"
            url="/follower-3"
          />
          <Follower
            src={process.env.PUBLIC_URL + "/img/follower-4.png"}
            srcSet={process.env.PUBLIC_URL + "/img/follower-4-retina.png 2x"}
            name="follower-4"
            url="/follower-4"
          />
          <Follower
            src={process.env.PUBLIC_URL + "/img/follower-5.png"}
            srcSet={process.env.PUBLIC_URL + "/img/follower-5-retina.png 2x"}
            name="follower-5"
            url="/follower-5"
          />
          <Follower
            src={process.env.PUBLIC_URL + "/img/follower-6.png"}
            srcSet={process.env.PUBLIC_URL + "/img/follower-6-retina.png 2x"}
            name="follower-6"
            url="/follower-6"
          />
        </UserList>
      </WrapperList>
      <WrapperList>
        <UserList
          title="522 Photos and videos"
          url="/EveryInteract/media"
          icon={iconPhotos}
          isPhotos={true}
        >
          <Photo
            src={process.env.PUBLIC_URL + "/img/photo-1.png"}
            srcSet={process.env.PUBLIC_URL + "/img/photo-1-retina.png 2x"}
            name="photo-1"
          />
          <Photo
            src={process.env.PUBLIC_URL + "/img/photo-2.png"}
            srcSet={process.env.PUBLIC_URL + "/img/photo-2-retina.png 2x"}
            name="photo-2"
          />
          <Photo
            src={process.env.PUBLIC_URL + "/img/photo-3.png"}
            srcSet={process.env.PUBLIC_URL + "/img/photo-3-retina.png 2x"}
            name="photo-3"
          />
          <Photo
            src={process.env.PUBLIC_URL + "/img/photo-4.png"}
            srcSet={process.env.PUBLIC_URL + "/img/photo-4-retina.png 2x"}
            name="photo-4"
          />
          <Photo
            src={process.env.PUBLIC_URL + "/img/photo-5.png"}
            srcSet={process.env.PUBLIC_URL + "/img/photo-5-retina.png 2x"}
            name="photo-5"
          />
          <Photo
            src={process.env.PUBLIC_URL + "/img/photo-6.png"}
            srcSet={process.env.PUBLIC_URL + "/img/photo-6-retina.png 2x"}
            name="photo-6"
          />
        </UserList>
      </WrapperList>
    </div>
  );
}
