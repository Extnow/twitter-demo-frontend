import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// img
import iconTick from '../../img/icon-tick.svg';
import iconLocation from './img/icon-location.svg';
import iconLink from './img/icon-link.svg';
import iconJoined from './img/icon-joined.svg';
import iconFollowers from './img/icon-followers.svg';
import iconPhotos from './img/icon-photos.svg';
// components
import List from './List';
import Follower from './Follower';
import Media from './Media';

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

const ProfileLink = styled(Link)`
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

const Username = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  margin-right: 8px;
  color: #697787;
  text-overflow: ellipsis;

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
    content: '';
    background-image: url(${({ img }) => img});
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
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    background-color: #1da1f2;
  }

  &:active {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #4ab3f4;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }
`;

const followers = [
  {
    id: 1,
    src: 'follower-1.png',
    srcSet: 'follower-1-retina.png',
    fullName: 'Oleg',
    to: 'salahov30',
  },
  {
    id: 2,
    src: 'follower-2.png',
    srcSet: 'follower-2-retina.png',
    fullName: 'Сергей Черкашин',
    to: 'VonderVuflya‏',
  },
  {
    id: 3,
    src: 'follower-3.png',
    srcSet: 'follower-3-retina.png',
    fullName: 'Caroline Ward',
    to: 'noveltyshoe',
  },
  {
    id: 4,
    src: 'follower-4.png',
    srcSet: 'follower-4-retina.png',
    fullName: 'Aya Ulan',
    to: 'aya_ulan',
  },
  {
    id: 5,
    src: 'follower-5.png',
    srcSet: 'follower-5-retina.png',
    fullName: 'CM/UX',
    to: 'lighthorsechris',
  },
  {
    id: 6,
    src: 'follower-6.png',
    srcSet: 'follower-6-retina.png',
    fullName: 'Pinky Bazaz',
    to: 'PinkyBazaz',
  },
];

const mediaFiles = [
  {
    id: 1,
    src: 'photo-1.png',
    srcSet: 'photo-1-retina.png',
    name: 'photo-1',
  },
  {
    id: 2,
    src: 'photo-2.png',
    srcSet: 'photo-2-retina.png',
    name: 'photo-2',
  },
  {
    id: 3,
    src: 'photo-3.png',
    srcSet: 'photo-3-retina.png',
    name: 'photo-3',
  },
  {
    id: 4,
    src: 'photo-4.png',
    srcSet: 'photo-4-retina.png',
    name: 'photo-4',
  },
  {
    id: 5,
    src: 'photo-5.png',
    srcSet: 'photo-5-retina.png',
    name: 'photo-5',
  },
  {
    id: 6,
    src: 'photo-6.png',
    srcSet: 'photo-6-retina.png',
    name: 'photo-6',
  },
];

export default () => (
  <div>
    <WrapperInfo>
      <Avatar>
        <AvatarImage
          src={`${process.env.PUBLIC_URL} /img/avatar-large.png`}
          srcSet={`${process.env.PUBLIC_URL} /img/avatar-large-retina.png 2x`}
          alt="avatar"
        />
      </Avatar>
      <Title>
        <ProfileLink to="/EveryInteract">
Every Interaction
        </ProfileLink>
        <img src={iconTick} alt="tick" />
      </Title>
      <Header>
        <span>
@
        </span>
        <Username to="/EveryInteract">
EveryInteract
        </Username>
        <span>
Follows you
        </span>
      </Header>
      <Bio>
        UX Design studio focussed problem solving creativity. Design to us is how can we make things
        *work* amazing.
      </Bio>
      <Info>
        <Element img={iconLocation}>
          <InfoText>
London, UK
          </InfoText>
        </Element>
        <Element img={iconLink}>
          <InfoLink href="https://www.everyinteraction.com/" target="_blank">
            everyinteraction.com
          </InfoLink>
        </Element>
        <Element img={iconJoined}>
          <InfoText>
Joined May 2008
          </InfoText>
        </Element>
      </Info>
      <Buttons>
        <Button>
Tweet to
        </Button>
        <Button>
Message
        </Button>
      </Buttons>
    </WrapperInfo>
    <WrapperList>
      <List
        title="6 Followers you know"
        to="/EveryInteract/followers_you_follow"
        icon={iconFollowers}
      >
        {followers.map(follower => (
          <Follower
            key={follower.id}
            src={`${process.env.PUBLIC_URL} /img/${follower.src}`}
            srcSet={`${process.env.PUBLIC_URL} /img/${follower.srcSet}} 2x`}
            fullName={follower.fullName}
            to={follower.to}
          />
        ))}
      </List>
    </WrapperList>
    <WrapperList>
      <List title="522 Photos and videos" to="/EveryInteract/media" icon={iconPhotos}>
        {mediaFiles.map(media => (
          <Media
            key={media.id}
            src={`${process.env.PUBLIC_URL} /img/${media.src}`}
            srcSet={`${process.env.PUBLIC_URL} /img${media.srcSet} 2x`}
            name={media.name}
          />
        ))}
      </List>
    </WrapperList>
  </div>
);
