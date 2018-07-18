// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FollowButton from '../UI/FollowButton';

import iconOfficial from '../img/icon-official.svg';
import iconClose from './img/icon-close.svg';

const User = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
  border-bottom: 1px solid #e6ecf0;
  position: relative;
`;

const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Img = styled.img`
  display: block;
  width: 48px;
  height: 48px;
`;

const Content = styled.div`
  padding-left: 60px;
  overflow: hidden;
  padding-bottom: 11px;
  padding-right: 20px;
`;

const StLink = styled(Link)`
  display: block;
  flex-direction: column;
  text-decoration: none;
`;

const Name = styled.div`
  margin-bottom: 9px;
  display: flex;
  align-items: center;
`;

const FullName = styled.span`
  color: #14171a;
  font-size: 13px;
  font-weight: bold;
  margin-right: 5px;
  white-space: nowrap;

  &:hover {
    color: #1da1f2;
    text-decoration: underline;
  }
`;

const Tick = styled.img`
  margin-right: 5px;
`;

const UserName = styled.span`
  font-size: 13px;
  color: #657786;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  width: 100%;
`;

const Close = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: auto;
  padding: 0;
`;

const CloseIcon = styled.img`
  display: block;
  padding: 2px;
  width: 8px;
  height: 8px;
`;

export default ({
  userName,
  fullName,
  src,
  srcSet,
  official,
}: {
  userName: string,
  fullName: string,
  src: string,
  srcSet: string,
  official: boolean,
}) => (
  <User>
    <Content>
      <StLink to={`/${userName}`}>
        <ImgWrapper>
          <Img src={src} srcSet={srcSet} alt={fullName} />
        </ImgWrapper>
        <Name>
          <FullName>{fullName}</FullName>
          {official && <Tick src={iconOfficial} alt="tick" />}
          <UserName>
            <span>@</span>
            {userName}
          </UserName>
        </Name>
      </StLink>
      <div>
        <FollowButton small>Follow</FollowButton>
      </div>
    </Content>
    <Close>
      <CloseIcon src={iconClose} alt="close button" />
    </Close>
  </User>
);
