import React from "react";
import styled from "styled-components";

const TweetBtn = styled.button`
  background: #1da1f2;
  border-radius: 100px;
  border: none;
  color: #fff;
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 8px 16px;
  cursor: pointer;
`;

const TweetButton = function() {
  return <TweetBtn>Tweet</TweetBtn>;
};

export default TweetButton;
