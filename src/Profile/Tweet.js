import React from "react";
import styled from "styled-components";
// img
import iconPinned from "./img/icon-pinned.svg";
import iconComments from "./img/icon-comments.svg";
import iconRetweet from "./img/icon-retweet.svg";
import iconLoves from "./img/icon-loves.svg";
import iconEnvelope from "./img/icon-envelope.svg";
// router
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 9px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f5f8fa;
  }
`;

const Pinned = styled.div`
  padding-left: 17px;
  margin-bottom: 4px;
  margin-left: 12px;
  font-size: 12px;
  color: #707e88;

  &:before {
    content: "";
    margin-right: 12px;
    display: inline-block;
    background-image: url(${iconPinned});
    background-repeat: no-repeat;
    background-position: center center;
    width: 11px;
    height: 12px;
  }
`;

const Main = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Header = styled.header`
  line-height: 30px;
  font-size: 15px;
`;

const FullName = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #292f33;

  &:hover {
    color: #1da1f2;
    text-decoration: underline;
  }
`;

const UserName = styled.span`
  color: #657786;
  padding: 0 5px;
`;

const Time = styled.span`
  &:before {
    content: "\00b7";
    margin-right: 5px;
  }
`;

const TimeLink = styled.a`
  color: #657786;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #1da1f2;
  }
`;

const Text = styled.p`
  margin: 0px;
  padding: 0px;
  line-height: 30px;
  font-size: 25px;
  color: #292f33;

  a {
    color: #1da1f2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

const PictureContainer = styled.div`
  margin-top: 17px;
`;

const Picture = styled.img`
  max-width: 100%;
  display: block;
`;

const QuoteTweet = styled.a`
  display: flex;
  margin-top: 6px;
  background-color: #ffffff;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    background-color: rgb(245, 248, 250);
    border-color: rgba(136, 153, 166, 0.5);
  }
`;

const QuoteImage = styled.img`
  display: block;
  width: 126px;
  height: 126px;
`;

const QuoteContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11px 9px;
`;

const QuoteTitle = styled.h2`
  font-weight: bold;
  font-size: 14px;
  margin: 0 0 5px 0;
`;

const QuoteText = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 5px 0;
  padding: 0;
`;

const QuoteLink = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: #8899a6;
`;

const Actions = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 14px;
`;

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background: none;
  cursor: pointer;
  font-size: 13px;
  color: #667580;
  margin-right: 40px;
  padding: 2px;

  &:before {
    content: "";
    height: 18px;
    width: 18px;
    margin-right: 10px;
    display: inline-block;
    background-image: url(${props => props.img});
    background-position: 0% 50%;
    background-repeat: no-repeat;
  }

  &:hover {
    color: ${props => props.color};
  }
`;

export default function(props) {
  function createMarkup() {
    return { __html: props.text };
  }

  function styledText() {
    return <Text dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <Wrapper>
      {props.pinned && <Pinned>Pinned Tweet</Pinned>}
      <Main>
        <div>
          <Avatar
            src={props.avatarSrc}
            srcSet={props.avatarSrcSet}
            alt={props.avatarAlt}
          />
        </div>
        <Content>
          <Header>
            <FullName to="/EveryInteract">{props.fullName}</FullName>
            <UserName>@{props.userName}</UserName>
            <Time>
              <TimeLink href="#">{props.time}</TimeLink>
            </Time>
          </Header>
          {styledText()}
          {props.picture && (
            <PictureContainer>
              <Picture
                src={props.pictureSrc}
                srcSet={props.pictureSrcSet}
                alt=""
              />
            </PictureContainer>
          )}
          {props.quote && (
            <QuoteTweet>
              <div>
                <QuoteImage
                  src={props.quoteSrc}
                  srcSet={props.quoteSrcSet}
                  alt={props.quoteTitle}
                />
              </div>
              <QuoteContent>
                <QuoteTitle>{props.quoteTitle}</QuoteTitle>
                <QuoteText>{props.quoteText}</QuoteText>
                <QuoteLink>{props.quoteLink}</QuoteLink>
              </QuoteContent>
            </QuoteTweet>
          )}
          <Actions>
            <li>
              <Button img={iconComments} color={"#1da1f2"}>
                {props.commentsValue}
              </Button>
            </li>
            <li>
              <Button img={iconRetweet} color={"#17bf63"}>
                {props.retweetValue}
              </Button>
            </li>
            <li>
              <Button img={iconLoves} color={"#e0245e"}>
                {props.lovesValue}
              </Button>
            </li>
            <li>
              <Button img={iconEnvelope} color={"#1da1f2"} />
            </li>
          </Actions>
        </Content>
      </Main>
    </Wrapper>
  );
}
