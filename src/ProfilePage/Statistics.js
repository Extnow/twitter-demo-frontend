// @flow

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import FollowButton from '../UI/FollowButton';
// img
import iconMore from './img/icon-more.png';

const Statistics = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0px 2px 2px #b0b8be;
  font-family: Helvetica;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavigationLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #707e88;
  text-align: center;
  padding: 0 10px;
  font-size: 12px;
  font-weight: bold;
  padding: 11px 15px;
  cursor: pointer;
  border-bottom: 3px solid transparent;

  &:hover {
    color: #1da1f2;
    border-bottom: 3px solid #1da1f2;
  }

  &:focus {
    outline: none;
    color: #1da1f2;
    border-bottom: 3px solid #1da1f2;
  }

  &.active {
    color: #1da1f2;
    border-bottom: 3px solid #1da1f2;
  }
`;

const Value = styled.div`
  padding-top: 5px;
  font-size: 18px;
`;

const Actions = styled.div`
  display: flex;
`;

const ExtraActions = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
  margin-left: 15px;
  transition: box-shadow 0.15s ease-in-out;

  &:before {
    content: '';
    display: block;
    width: 4px;
    height: 14px;
    background-image: url(${iconMore});
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 2px 4px rgba(0, 153, 153, 0.4);
  }
`;

type UserData = {
  id: string,
  username: string,
  avatar: string,
  acct: string,
  display_name: string,
  locked: boolean,
  bot: boolean,
  created_at: string,
  note: string,
  url: string,
  avatar: string,
  avatar_static: string,
  header: string,
  header_static: string,
  followers_count: number,
  following_count: number,
  statuses_count: number,
  emojis: (?Object)[],
  fields: (?Object)[],
  error?: string,
};

export default ({ userInfo }: { userInfo: UserData }) => (
  <Statistics>
    <div className="container">
      <div className="row">
        <div className="col-xs-offset-3 col-xs-9">
          <Wrapper>
            <Navigation>
              <li>
                <NavigationLink to={`/${userInfo.id}`} exact>
                  <span>Tweets</span>
                  <Value>{userInfo.statuses_count}</Value>
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to={`/${userInfo.id}/following`}>
                  <span>Following</span>
                  <Value>{userInfo.following_count}</Value>
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to={`/${userInfo.id}/followers`}>
                  <span>Followers</span>
                  <Value>{userInfo.followers_count}</Value>
                </NavigationLink>
              </li>
            </Navigation>
            <Actions>
              <FollowButton>Follow</FollowButton>
              <ExtraActions />
            </Actions>
          </Wrapper>
        </div>
      </div>
    </div>
  </Statistics>
);
