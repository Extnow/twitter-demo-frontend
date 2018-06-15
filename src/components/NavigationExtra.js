import React from "react";
import styled from "styled-components";
// img
import magnifierLogo from "./../img/Icon_Magnifier.svg";

const SearchInput = styled.input`
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
  padding: 9px 61px 8px 11px;
  font-size: 12px;
  background-image: url(${magnifierLogo});
  background-repeat: no-repeat;
  background-position: 193px 50%;
  margin-right: 15px;
`;

const TweetButton = styled.button`
  background: #1da1f2;
  border-radius: 100px;
  border: none;
  color: #fff;
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 9px 16px;
  cursor: pointer;
  margin-left: 15px;
`;

const NavExtra = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarIcon = styled.img`
  display: block;
  width: 28px;
  height: 28px;
`;

const NavigationExtra = function() {
  return (
    <NavExtra>
      <SearchInput placeholder="Search Twitter" type="text" />
      <a href="">
        <AvatarIcon
          src={process.env.PUBLIC_URL + "/img/Avatar.png"}
          srcSet={process.env.PUBLIC_URL + `${"/img/AvatarRetina.png"} 2x`}
          alt="avatar"
        />
      </a>
      <TweetButton>Tweet</TweetButton>
    </NavExtra>
  );
};

export default NavigationExtra;
