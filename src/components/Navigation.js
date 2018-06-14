import React from "react";
import styled from "styled-components";
// import icons
import homeLogo from "./../img/Icon_Home.svg";
import momentsLogo from "./../img/Icon_Moments.svg";
import notificationsLogo from "./../img/Icon_Notifications.svg";
import messagesLogo from "./../img/Icon_Messages.svg";

const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Link = styled.a`
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
    <Links>
      <li>
        <Link href="">
          <Icon src={homeLogo} alt="home" />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="">
          <Icon src={momentsLogo} alt="moments" />
          <span>Moments</span>
        </Link>
      </li>
      <li>
        <Link href="">
          <Icon src={notificationsLogo} alt="notifications" />
          <span>Notifications</span>
        </Link>
      </li>
      <li>
        <Link href="">
          <Icon src={messagesLogo} alt="messages" />
          <span>Messages</span>
        </Link>
      </li>
    </Links>
  );
};

export default Navigation;
