import React from "react";
import styled from "styled-components";
// import icons
import homeLogo from "./../img/Icon_Home.svg";
import momentsLogo from "./../img/Icon_Moments.svg";
import notificationsLogo from "./../img/Icon_Notifications.svg";
import messagesLogo from "./../img/Icon_Messages.svg";

const Links = styled.ul`
  display: flex;
  height: 45px;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  margin-right: 25px;
  font-size: 13px;
  color: #667580;
  text-decoration: none;

  last-child {
    margin-right: 0px;
  }
`;

const Navigation = function() {
  return (
    <Links>
      <li>
        <Link href="">
          <img src={homeLogo} alt="home" />
          Home
        </Link>
      </li>
      <li>
        <Link href="">
          <img src={momentsLogo} alt="moments" />
          Moments
        </Link>
      </li>
      <li>
        <Link href="">
          <img src={notificationsLogo} alt="notifications" />
          Notifications
        </Link>
      </li>
      <li>
        <Link href="">
          <img src={messagesLogo} alt="messages" />
          Messages
        </Link>
      </li>
    </Links>
  );
};

export default Navigation;
