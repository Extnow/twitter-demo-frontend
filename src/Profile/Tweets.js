import React from "react";
import styled from "styled-components";
// img
import iconPinned from "./img/icon-pinned.svg";
import iconComments from "./img/icon-comments.svg";
import iconRetweet from "./img/icon-retweet.svg";
import iconLoves from "./img/icon-loves.svg";
import iconEnvelope from "./img/icon-envelope.svg";

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

const Tweet = styled.div`
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

const FullName = styled.a`
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
`;

const TextSmall = styled.p`
  margin: 0px;
  padding: 0px;
  line-height: 22px;
  font-size: 16px;
`;

const Link = styled.a`
  color: #1da1f2;
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const HashTag = styled.a`
  color: #1da1f2;
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline;
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

const QuoteUrl = styled.span`
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
  height: 18px;
  padding: 1px 25px;
  background: none;
  background-image: url(${props => props.img});
  background-position: 0% 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  font-size: 13px;
  color: #667580;

  &:hover {
    color: ${props => props.color};
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
      <Tweet>
        <Pinned>Pinned Tweet</Pinned>
        <Main>
          <Avatar
            src={process.env.PUBLIC_URL + "/img/avatar-medium.png"}
            srcSet={process.env.PUBLIC_URL + `${"/img/avatar-medium-retina.png"} 2x`}
            alt="avatar"
          />
          <Content>
            <Header>
              <FullName href="#">Every Interaction</FullName>
              <UserName>@EveryInteract</UserName>
              <Time>
                <TimeLink href="#">2 Mar 2015</TimeLink>
              </Time>
            </Header>
            <Text>
              We’ve made some more resources for all you wonderful{" "}
              <HashTag>#design</HashTag> folk
              <Link>everyinteraction.com/resources/</Link>{" "}
              <HashTag>#webdesign</HashTag>
              <HashTag>#UI</HashTag>
            </Text>
            <PictureContainer>
              <Picture
                src={process.env.PUBLIC_URL + "/img/img1.png"}
                srcSet={process.env.PUBLIC_URL + `${"/img/img1-retina.png"} 2x`}
                alt=""
              />
            </PictureContainer>
            <Actions>
              <li>
                <Button img={iconComments} color={"#1da1f2"} />
              </li>
              <li>
                <Button img={iconRetweet} color={"#17bf63"}>
                  17
                </Button>
              </li>
              <li>
                <Button img={iconLoves} color={"#e0245e"}>
                  47
                </Button>
              </li>
              <li>
                <Button img={iconEnvelope} color={"#1da1f2"} />
              </li>
            </Actions>
          </Content>
        </Main>
      </Tweet>

      <Tweet>
        <Main>
          <div>
            <Avatar
              src={process.env.PUBLIC_URL + "/img/avatar-medium.png"}
              srcSet={
                process.env.PUBLIC_URL + `${"/img/avatar-medium-retina.png"} 2x`
              }
              alt="avatar"
            />
          </div>
          <Content>
            <Header>
              <FullName href="">Every Interaction</FullName>
              <UserName>@EveryInteract</UserName>
              <Time>
                <TimeLink href="">23h</TimeLink>
              </Time>
            </Header>
            <Text>
              Our new website concept; Taking you from… @ Every Interaction{" "}
              <Link>instagram.com/p/BNFGrfhBP3M/</Link>
            </Text>
            <Actions>
              <li>
                <Button img={iconComments} color={"#1da1f2"} />
              </li>
              <li>
                <Button img={iconRetweet} color={"#17bf63"}>
                  17
                </Button>
              </li>
              <li>
                <Button img={iconLoves} color={"#e0245e"}>
                  47
                </Button>
              </li>
              <li>
                <Button img={iconEnvelope} color={"#1da1f2"} />
              </li>
            </Actions>
          </Content>
        </Main>
      </Tweet>

      <Tweet>
        <Main>
          <div>
            <Avatar
              src={process.env.PUBLIC_URL + "/img/avatar-medium.png"}
              srcSet={
                process.env.PUBLIC_URL + `${"/img/avatar-medium-retina.png"} 2x`
              }
              alt="avatar"
            />
          </div>
          <Content>
            <Header>
              <FullName href="">Every Interaction</FullName>
              <UserName>@EveryInteract</UserName>
              <Time>
                <TimeLink href="">Nov 18</TimeLink>
              </Time>
            </Header>
            <TextSmall>
              Variable web fonts are coming, and will open a world of opportunities
              for weight use online
            </TextSmall>
            <QuoteTweet>
              <div>
                <QuoteImage
                  src={process.env.PUBLIC_URL + "/img/img2.png"}
                  srcSet={process.env.PUBLIC_URL + `${"/img/img2-retina.png"} 2x`}
                  alt=""
                />
              </div>
              <QuoteContent>
                <QuoteTitle>The Future of Web Fonts</QuoteTitle>
                <QuoteText>
                  We love typefaces. They give our sites and applications
                  personalized feel. They convey the information and tell a story.
                  They establish information hierarchy. But they’re…
                </QuoteText>
                <QuoteUrl>viliamis.com</QuoteUrl>
              </QuoteContent>
            </QuoteTweet>
            <Actions>
              <li>
                <Button img={iconComments} color={"#1da1f2"} />
              </li>
              <li>
                <Button img={iconRetweet} color={"#17bf63"}>
                  17
                </Button>
              </li>
              <li>
                <Button img={iconLoves} color={"#e0245e"}>
                  47
                </Button>
              </li>
              <li>
                <Button img={iconEnvelope} color={"#1da1f2"} />
              </li>
            </Actions>
          </Content>
        </Main>
      </Tweet>
    </Wrapper>
  );
}
