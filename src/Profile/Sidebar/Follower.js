import React from "react";
import styled from "styled-components";
// router
import { NavLink } from "react-router-dom";

const Follower = styled(NavLink)`
  display: block;
  margin: 0 5px 5px 0;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }
`;

const Img = styled.img`
  display: block;
  width: 48px;
  height: 48px;
`;

export default function(props) {
  return (
    <Follower to={props.url}>
      <Img src={props.src} srcSet={props.srcSet} alt={props.name} />
    </Follower>
  );
}