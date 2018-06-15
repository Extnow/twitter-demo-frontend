import React from "react";
import styled from "styled-components";
// import icons
import homeLogo from "./../img/Icon_Home.svg";
import momentsLogo from "./../img/Icon_Moments.svg";
import notificationsLogo from "./../img/Icon_Notifications.svg";
import messagesLogo from "./../img/Icon_Messages.svg";
// router
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Lik = styled(Link)`
  display: flex;
  padding: 13px 25px 13px 5px;
  align-items: center;
  font-size: 13px;
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
          <Lik to="/">
            <Icon src={homeLogo} alt="home" />
            <span>Home</span>
          </Lik>
        </li>
        <li>
          <Lik to="/moments">
            <Icon src={momentsLogo} alt="moments" />
            <span>Moments</span>
          </Lik>
        </li>
        <li>
          <Lik to="/notifications">
            <Icon src={notificationsLogo} alt="notifications" />
            <span>Notifications</span>
          </Lik>
        </li>
        <li>
          <Lik to="/messages">
            <Icon src={messagesLogo} alt="messages" />
            <span>Messages</span>
          </Lik>
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
