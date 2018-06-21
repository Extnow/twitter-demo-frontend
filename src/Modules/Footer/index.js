import React from "react";
import styled from "styled-components";

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

export default function() {
  return (
    <Wrapper>
      <Copyright>© Twitter, 2018</Copyright>
      <Link href="#">About</Link>
      <Link href="#">Help Center</Link>
      <Link href="#">Terms</Link>
      <Link href="#">Privacy policy</Link>
      <Link href="#">Cookies</Link>
      <Link href="#">Ads</Link>
      <Link href="#">Info</Link>
    </Wrapper>
  );
}
