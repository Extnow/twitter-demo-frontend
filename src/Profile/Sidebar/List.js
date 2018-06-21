import React from "react";
import styled from "styled-components";
// router
import { Link } from "react-router-dom";

const StLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #1da1f2;
  font-size: 14px;
  margin-bottom: 8px;

  &:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    margin-right: 12px;
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function(props) {
  return (
    <div>
      <StLink to={props.to} icon={props.icon}>
        {props.title}
      </StLink>
      <Wrapper>{props.children}</Wrapper>
    </div>
  );
}
