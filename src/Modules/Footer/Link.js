import React from "react";
import styled from "styled-components";

const Link = styled.a`
  display: inline-block;
  font-size: 13px;
  line-height: 18px;
  color: #718290;
  text-decoration: none;
  margin-right: 7px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function(props) {
  return <Link href="#">{props.link}</Link>;
}
