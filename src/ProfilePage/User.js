import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// img
import iconOfficial from '../img/icon-official.svg';
import iconLocation from './img/icon-location.svg';
import iconLink from './img/icon-link.svg';
import iconJoined from './img/icon-joined.svg';

const WrapperInfo = styled.div`
  margin: 40px 0 20px 0;
`;

const Title = styled.h1`
  margin: 0;
`;

const Avatar = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -179px;
  background-color: #fff;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  z-index: 2;
  width: 207px;
  height: 207px;
`;

const FullName = styled(Link)`
  color: #14171a;
  text-decoration: none;
  font-family: Helvetica;
  line-height: 22px;
  font-size: 22px;
  margin-right: 5px;

  &:after {
    content: '';
    display: inline-block;
    background-image: url(${({ official }) => (official ? iconOfficial : '')});
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }

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

  p {
    margin: 0;
    padding: 0;
  }
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
  margin-bottom: 8px;

  &:before {
    content: '';
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: center center;
    width: 20px;
    height: 20px;
  }
`;

const InfoLink = styled.a`
  margin-left: 5px;
  font-size: 14px
  line-height: 14px;
  color: #1DA1F2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const InfoText = styled.span`
  margin-left: 5px;
  font-size: 14px
  line-height: 14px;
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

export default function ({
  src,
  srcSet,
  userName,
  official,
  fullName,
  isFollowsYou,
  bio,
  location,
  website,
  websiteUrl,
  joined,
}) {
  function createMarkup() {
    return { __html: bio };
  }

  function styledText() {
    return <Bio dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <WrapperInfo>
      <Avatar
        src={`${process.env.PUBLIC_URL} ${src}`}
        srcSet={`${process.env.PUBLIC_URL} ${srcSet} 2x`}
        alt={fullName}
      />
      <Title>
        <FullName official={official} to={userName}>
          {fullName}
        </FullName>
      </Title>
      <Header>
        @
        <Username to={`/${userName}`}>{userName}</Username>
        {isFollowsYou && <span>Follows you</span>}
      </Header>
      {styledText()}
      <Info>
        {location && (
          <Element img={iconLocation}>
            <InfoText>{location}</InfoText>
          </Element>
        )}
        <Element img={iconLink}>
          <InfoLink href={websiteUrl} target="_blank">
            {website}
          </InfoLink>
        </Element>
        {joined && (
          <Element img={iconJoined}>
            <InfoText>{joined}</InfoText>
          </Element>
        )}
      </Info>
      <Buttons>
        <Button>Tweet to</Button>
        <Button>Message</Button>
      </Buttons>
    </WrapperInfo>
  );
}
