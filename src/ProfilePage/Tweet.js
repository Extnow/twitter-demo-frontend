// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
// img
import iconPinned from './img/icon-pinned.svg';
import iconRetweet from './img/icon-retweet.svg';
import iconLoves from './img/icon-loves.svg';
import iconEnvelope from './img/icon-envelope.svg';

const Wrapper = styled.div`
  padding: 9px 12px;
  cursor: pointer;
  border-bottom: 1px solid #e1e8ed;

  &:hover {
    background-color: #f5f8fa;
  }
`;

const Pinned = styled.div`
  padding-left: 17px;
  margin-bottom: 4px;
  margin-left: 12px;
  font-size: 12px;
  color: #707e88;

  &:before {
    content: '';
    margin-right: 12px;
    display: inline-block;
    background-image: url(${iconPinned});
    background-repeat: no-repeat;
    background-position: center center;
    width: 11px;
    height: 12px;
  }
`;

const Main = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Header = styled.header`
  line-height: 30px;
  font-size: 15px;
`;

const FullName = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #292f33;

  &:hover {
    color: #1da1f2;
    text-decoration: underline;
  }
`;

const UserName = styled.span`
  color: #657786;
  padding: 0 5px;
`;

const TimeLink = styled.a`
  color: #657786;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
    color: #1da1f2;
  }
`;

const Text = styled.p`
  margin: 0px;
  padding: 0px;
  line-height: 22px;
  font-size: 16px;
  color: #292f33;

  p {
    margin: 0;
    margin-bottom: 17px;
    word-break: breaka-all;
  }

  a {
    color: #1da1f2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

const Picture = styled.img`
  display: block;
  width: 100%;
  max-width: 450px;
`;

const Actions = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 14px;
`;

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background: none;
  cursor: pointer;
  font-size: 13px;
  color: #667580;
  margin-right: 40px;
  padding: 2px;

  &:before {
    content: '';
    height: 18px;
    width: 18px;
    margin-right: 10px;
    display: inline-block;
    background-image: url(${({ img }) => img});
    background-position: 0% 50%;
    background-repeat: no-repeat;
  }

  &:hover {
    color: ${({ color }) => color};
  }
`;

export default function ({
  id,
  text,
  pinned,
  avatarSrc,
  avatarAlt,
  fullName,
  userName,
  time,
  pictureSrc,
  retweetValue,
  lovesValue,
}: {
  id: string,
  text: string,
  pinned: boolean,
  avatarSrc: string,
  avatarAlt: string,
  fullName: string,
  userName: string,
  time: string,
  pictureSrc: Array<Object>,
  retweetValue: number,
  lovesValue: number,
}) {
  function createMarkup() {
    return { __html: text };
  }

  function styledText() {
    return <Text dangerouslySetInnerHTML={createMarkup()} />;
  }

  const formattedTime = distanceInWordsToNow(new Date(time), { addSuffix: true });

  return (
    <Wrapper>
      {pinned && <Pinned>Pinned Tweet</Pinned>}
      <Main>
        <div>
          <Avatar src={avatarSrc} alt={avatarAlt} />
        </div>
        <Content>
          <Header>
            <FullName to={`/${id}`}>{fullName}</FullName>
            <UserName>@{userName}</UserName>
            <span>
              ·
              <TimeLink href="#">{formattedTime}</TimeLink>
            </span>
          </Header>
          {styledText()}
          {pictureSrc.map(picSrc => <Picture key={picSrc.id} src={picSrc.preview_url} />)}
          <Actions>
            <li>
              <Button img={iconRetweet} color="#17bf63">
                {retweetValue}
              </Button>
            </li>
            <li>
              <Button img={iconLoves} color="#e0245e">
                {lovesValue}
              </Button>
            </li>
            <li>
              <Button img={iconEnvelope} color="#1da1f2" />
            </li>
          </Actions>
        </Content>
      </Main>
    </Wrapper>
  );
}
