import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import TweetButton from '../UI/TweetButton';
// import icons
import iconMagnifier from './img/icon-magnifier.svg';
import iconHome from './img/icon-home.svg';
import iconMoments from './img/icon-moments.svg';
import iconNotifications from './img/icon-notifications.svg';
import iconMessages from './img/icon-messages.svg';
import iconTwitterLogo from './img/icon-twitter-logo.svg';

const Header = styled.header`
  position: sticky;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 1000;
  background-color: #fff;
  font-family: Helvetica Neue, Helvetica;
  box-shadow: 0px 1px 1px #b0b8be;
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
  display: flex;
  padding: 11px 25px 11px 5px;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  color: #667580;
  text-decoration: none;
  border-bottom: 3px solid transparent;

  &:hover {
    color: #1da1f2;
    border-bottom: 3px solid #1da1f2;
  }

  &:focus {
    outline: none;
    color: #1da1f2;
  }

  &:before {
    content: '';
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: center center;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

const TwitterLogo = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    width: 21px;
    height: 21px;
    background-image: url(${iconTwitterLogo});
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
`;

const NavExtra = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Action = styled.li`
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
  padding: 8px 61px 8px 11px;
  font-size: 12px;
  transition: border 0.15s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid #1da1f2;
    background-color: #fff;
  }
`;

const SearchButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  padding: 2px;
  right: 13px;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in-out;

  &:before {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    background-image: url(${iconMagnifier});
    background-repeat: no-repeat;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }
`;

const AvatarButton = styled.button`
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #fff;
  cursor: pointer;
  padding: 0;
  transition: box-shadow 0.15s ease-in-out;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }
`;

const AvatarIcon = styled.img`
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export default () => (
  <Header>
    <div className="container">
      <Wrapper>
        <Navigation>
          <li>
            <NavigationLink icon={iconHome} to="/">
              Home
            </NavigationLink>
          </li>
          <li>
            <NavigationLink icon={iconMoments} to="/moments">
              Moments
            </NavigationLink>
          </li>
          <li>
            <NavigationLink icon={iconNotifications} to="/notifications">
              Notifications
            </NavigationLink>
          </li>
          <li>
            <NavigationLink icon={iconMessages} to="/messages">
              Messages
            </NavigationLink>
          </li>
        </Navigation>
        <TwitterLogo />
        <NavExtra>
          <Action>
            <SearchForm>
              <SearchInput placeholder="Search Twitter" type="text" />
              <SearchButton type="submit" />
            </SearchForm>
          </Action>
          <Action>
            <AvatarButton>
              <AvatarIcon
                src={`${process.env.PUBLIC_URL}/img/avatar-small.png`}
                srcSet={`${process.env.PUBLIC_URL}${'/img/avatar-small-retina.png'} 2x`}
                alt="avatar"
              />
            </AvatarButton>
          </Action>
          <Action>
            <TweetButton small>Tweet</TweetButton>
          </Action>
        </NavExtra>
      </Wrapper>
    </div>
  </Header>
);
