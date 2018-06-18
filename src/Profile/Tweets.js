import React from "react";
import styled from "styled-components";
// img
import Tweet from "./Tweet";

const Wrapper = styled.div`
  margin-top: 10px;
  background-color: #fff;
`;

const Navigation = styled.ul`
  border-bottom: 1px solid #eee;
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavigationButton = styled.button`
  border: none;
  background-color: #fff;
  font-size: 18px;
  line-height: 18px;
  color: #1da1f2;
  font-weight: bold;
  padding: 15px 15px 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

export default function() {
  return (
    <Wrapper>
      <Navigation>
        <li>
          <NavigationButton>Tweets</NavigationButton>
        </li>
        <li>
          <NavigationButton>Tweets & replies</NavigationButton>
        </li>
        <li>
          <NavigationButton>Media</NavigationButton>
        </li>
      </Navigation>
      <Tweet
        pinned={true}
        avatarSrc={process.env.PUBLIC_URL + "/img/avatar-medium.png"}
        avatarSrcSet={
          process.env.PUBLIC_URL + "/img/avatar-medium-retina.png 2x"
        }
        avatarAlt="avatar"
        fullName="Every Interaction"
        userName="@EveryInteract"
        time="2 Mar 2015"
        text="We’ve made some more resources for all you wonderful
        <a target='_blank' href='#'>#design</a> folk <a target='_blank' href='#'>
        everyinteraction.com/resources/</a> <a target='_blank' href='#'>#webdesign</a>
        <a target='_blank' href='#'>#UI</a>"
        picture={true}
        pictureSrc={process.env.PUBLIC_URL + "/img/img1.png"}
        pictureSrcSet={process.env.PUBLIC_URL + "/img/img1-retina.png 2x"}
        quote={false}
        retweetValue="17"
        lovesValue="47"
      />
      <Tweet
        avatarSrc={process.env.PUBLIC_URL + "/img/avatar-medium.png"}
        avatarSrcSet={
          process.env.PUBLIC_URL + "/img/avatar-medium-retina.png 2x"
        }
        avatarAlt="avatar"
        fullName="Every Interaction"
        userName="@EveryInteract"
        time="2 Mar 2015"
        text="Our new website concept; Taking you from… @ Every Interaction
        <a target='_blank' href='#'>instagram.com/p/BNFGrfhBP3M/</a>"
        quote={false}
        commentValue="1"
        retweetValue="4"
        lovesValue="2"
      />
      <Tweet
        avatarSrc={process.env.PUBLIC_URL + "/img/avatar-medium.png"}
        avatarSrcSet={
          process.env.PUBLIC_URL + "/img/avatar-medium-retina.png 2x"
        }
        avatarAlt="avatar"
        fullName="Every Interaction"
        userName="@EveryInteract"
        time="23h"
        text="Variable web fonts are coming, and will open a world of opportunities for weight use online"
        quote={true}
        quoteSrc={process.env.PUBLIC_URL + "/img/img2.png"}
        quoteSrcSet={process.env.PUBLIC_URL + "/img/img2-retina.png 2x"}
        quoteTitle="The Future of Web Fonts"
        quoteText="We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…"
        quoteLink="vilijamis.com"
      />
    </Wrapper>
  );
}
