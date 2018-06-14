import React from "react";
import styled from "styled-components";
// img
import iconMore from "./../img/Icon_More.png";

const Statistics = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0px 2px 2px #b0b8be;
  font-family: Helvetica;
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Link = styled.a`
  color: #707e88;
  text-align: center;
  text-decoration: none;
  padding: 0 10px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  padding: 11px 15px;
`;

const Actions = styled.div`
  display: flex;
`;

const Value = styled.span`
  padding-top: 5px;
  color: #1da1f2;
  font-size: 18px;
`;

const Numbers = function() {
  return (
    <div>
      <Links>
        <li>
          <Link href="">
            <span>Tweets</span>
            <Value>8,058</Value>
          </Link>
        </li>
        <li>
          <Link href="">
            <span>Following</span>
            <Value>721</Value>
          </Link>
        </li>
        <li>
          <Link href="">
            <span>Followers</span>
            <Value>1,815</Value>
          </Link>
        </li>
        <li>
          <Link href="">
            <span>Likes</span>
            <Value>460</Value>
          </Link>
        </li>
        <li>
          <Link href="">
            <span>Lists</span>
            <Value>2</Value>
          </Link>
        </li>
      </Links>
    </div>
  );
};

const FollowButton = styled.button`
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  color: #1da1f2;
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 9px 27px;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    background-color: #e8f5fd;
  }

  &:focus {
    background-color: #e8f5fd;
  }
`;

const ActionButton = styled.button`
  border: none;
  background: transparent;
  background-image: url(${iconMore});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  cursor: pointer;
`;

export { Statistics, Numbers, Actions, FollowButton, ActionButton };
