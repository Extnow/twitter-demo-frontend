import React from "react";
import styled from "styled-components";
// components
import Link from "./Link.js";

const Wrapper = styled.div`
  margin-top: 20px;
  background-color: transparent;
`;

const Copyright = styled.span`
  font-size: 13px;
  line-height: 18px;
  color: #718290;
  margin-right: 7px;
`;

export default function() {
  return (
    <Wrapper>
      <Copyright>© Twitter, 2018</Copyright>
      <Link link="About" />
      <Link link="Help Center" />
      <Link link="Terms" />
      <Link link="Privacy policy" />
      <Link link="Cookies" />
      <Link link="Ads" />
      <Link link="Info" />
    </Wrapper>
  );
}
