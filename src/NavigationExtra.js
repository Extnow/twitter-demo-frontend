import React from "react";
import styled from "styled-components";
// img
import iconMagnifier from "./img/icon-magnifier.svg";

const SearchInput = styled.input`
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
  padding: 9px 61px 8px 11px;
  font-size: 12px;
  background-image: url(${iconMagnifier});
  background-repeat: no-repeat;
  background-position: 193px 50%;
  margin-right: 15px;

  &:focus {
    border: 1px solid #1da1f2;
    background-color: #fff;
  }
`;

const TweetButton = styled.button`
  background-color: #4ab3f4;
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

  &:hover {
    background-color: #1da1f2;
  }
`;

const NavExtra = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
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
      <AvatarButton>
        <AvatarIcon
          src={process.env.PUBLIC_URL + "/img/avatar-small.png"}
          srcSet={process.env.PUBLIC_URL + `${"/img/avatar-small-retina.png"} 2x`}
          alt="avatar"
        />
      </AvatarButton>
      <TweetButton>Tweet</TweetButton>
    </NavExtra>
  );
};

export default NavigationExtra;
