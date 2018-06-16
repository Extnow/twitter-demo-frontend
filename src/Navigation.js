import React from "react";
import styled from "styled-components";
// import icons
import iconHome from "./img/icon-home.svg";
import iconMoments from "./img/icon-moments.svg";
import iconNotifications from "./img/icon-notifications.svg";
import iconMessages from "./img/icon-messages.svg";
// router
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const LinkStyled = styled(Link)`
  display: flex;
  padding: 13px 25px 13px 5px;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  color: #667580;
  text-decoration: none;

  &:hover {
    color: #1da1f2;
  }
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const Navigation = function() {
  return (
    <BrowserRouter>
      <Links>
        <li>
          <LinkStyled to="/">
            <Icon src={iconHome} alt="home" />
            <span>Home</span>
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/moments">
            <Icon src={iconMoments} alt="moments" />
            <span>Moments</span>
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/notifications">
            <Icon src={iconNotifications} alt="notifications" />
            <span>Notifications</span>
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/messages">
            <Icon src={iconMessages} alt="messages" />
            <span>Messages</span>
          </LinkStyled>
        </li>

        <Switch>
          <Redirect exact from="/" to="/EveryInteract" />
          <Route exact path="/" />
          <Route path="/about" />
          <Route path="/topics" />
        </Switch>
      </Links>
    </BrowserRouter>
  );
};

export default Navigation;
