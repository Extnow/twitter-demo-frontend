// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const User = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 10px;
`;

const Header = styled.img`
  display: block;
  width: 280px;
  height: 90px;
`;

const UserInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const FullName = styled(Link)`
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

export default ({
  id,
  banner,
  fullName,
  userName,
}: {
  id: string,
  banner: string,
  fullName: string,
  userName: string,
}) => (
  <User>
    <Header src={banner} />
    <UserInfo>
      <FullName to={`/${id}`}>{fullName}</FullName>
      <Username to={`/${id}`}>@{userName}</Username>
    </UserInfo>
  </User>
);
