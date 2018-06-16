import React from "react";
import styled from "styled-components";
// img
import iconPinned from "./../img/icon-pinned.svg";
import iconComments from "./../img/icon-comments.svg";
import iconRetweet from "./../img/icon-retweet.svg";
import iconLoves from "./../img/icon-loves.svg";
import iconEnvelope from "./../img/icon-envelope.svg";

const Wrapper = styled.div`
  margin-top: 10px;
  background-color: #fff;
`;

const Header = styled.ul`
  border-bottom: 1px solid #eee;
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  display: block;
  font-size: 18px;
  line-height: 18px;
  color: #1da1f2;
  font-weight: bold;
  text-decoration: none;
  padding: 15px 15px 12px;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #14171a;
  }
`;

const Pinned = styled.div`
  padding-left: 48px;
  margin-bottom: 4px;
`;

const Tweet = styled.div`
  padding: 9px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f5f8fa;
  }
`;

const PinnedText = styled.span`
  margin-left: 12px;
  font-size: 12px;
  color: #707e88;
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

const TweetHeader = styled.header`
  line-height: 30px;
  font-size: 15px;
`;

const TweetHeaderFullName = styled.a`
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #292f33;

  &:hover {
    color: #1da1f2;
    text-decoration: underline;
  }
`;

const TweetHeaderUserName = styled.span`
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

const Url = styled.a`
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

const TweetPictureContainer = styled.div`
  margin-top: 17px;
`;

const TweetPicture = styled.img`
  max-width: 100%;
  display: block;
`;

const TweetLink = styled.a`
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

const TweetLinkImage = styled.img`
  display: block;
  width: 126px;
  height: 126px;
`;

const TweetLinkContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11px 9px;
`;

const TweetLinkTitle = styled.h2`
  font-weight: bold;
  font-size: 14px;
  margin: 0 0 5px 0;
`;

const TweetLinkText = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 5px 0;
  padding: 0;
`;

const TweetLinkUrl = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: #8899a6;
`;

const ActionList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 14px;
`;

const ButtonComments = styled.button`
  border: none;
  height: 18px;
  padding: 1px 25px;
  background: none;
  background-image: url(${iconComments});
  background-position: 0% 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  font-size: 13px;
  color: #667580;

  &:hover {
    color: #1da1f2;
  }
`;

const ButtonRetweet = styled.button`
  border: none;
  height: 18px;
  padding: 1px 25px;
  background: none;
  background-image: url(${iconRetweet});
  background-position: 0% 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  font-size: 13px;
  color: #667580;

  &:hover {
    color: #17bf63;
  }
`;

const ButtonLoves = styled.button`
  border: none;
  height: 18px;
  padding: 1px 25px;
  background: none;
  background-image: url(${iconLoves});
  background-position: 0% 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  font-size: 13px;
  color: #667580;

  &:hover {
    color: #e0245e;
  }
`;

const ButtonEnvelope = styled.button`
  border: none;
  height: 18px;
  padding: 1px 25px;
  background: none;
  background-image: url(${iconEnvelope});
  background-position: 0% 50%;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    color: #17bf63;
  }
`;

const Tweets = function() {
  return (
    <Wrapper>
      <Header>
        <li>
          <Link href="#">Tweets</Link>
        </li>
        <li>
          <Link href="#">Tweets & replies</Link>
        </li>
        <li>
          <Link href="#">Media</Link>
        </li>
      </Header>
      <Tweet>
        <Pinned>
          <img src={iconPinned} alt="pinned" />
          <PinnedText>Pinned Tweet</PinnedText>
        </Pinned>
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
            <TweetHeader>
              <TweetHeaderFullName href="">Every Interaction</TweetHeaderFullName>
              <TweetHeaderUserName>@EveryInteract</TweetHeaderUserName>
              <Time>
                <TimeLink href="">2 Mar 2015</TimeLink>
              </Time>
            </TweetHeader>
            <Text>
              We’ve made some more resources for all you wonderful{" "}
              <HashTag>#design</HashTag> folk
              <Url>everyinteraction.com/resources/</Url>{" "}
              <HashTag>#webdesign</HashTag> <HashTag>#UI</HashTag>
            </Text>
            <TweetPictureContainer>
              <TweetPicture
                src={process.env.PUBLIC_URL + "/img/img1.png"}
                srcSet={process.env.PUBLIC_URL + `${"/img/img1-retina.png"} 2x`}
                alt=""
              />
            </TweetPictureContainer>
            <ActionList>
              <li>
                <ButtonComments />
              </li>
              <li>
                <ButtonRetweet>17</ButtonRetweet>
              </li>
              <li>
                <ButtonLoves>47</ButtonLoves>
              </li>
              <li>
                <ButtonEnvelope />
              </li>
            </ActionList>
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
            <TweetHeader>
              <TweetHeaderFullName href="">Every Interaction</TweetHeaderFullName>
              <TweetHeaderUserName>@EveryInteract</TweetHeaderUserName>
              <Time>
                <TimeLink href="">23h</TimeLink>
              </Time>
            </TweetHeader>
            <Text>
              Our new website concept; Taking you from… @ Every Interaction{" "}
              <Url>instagram.com/p/BNFGrfhBP3M/</Url>
            </Text>
            <ActionList>
              <li>
                <ButtonComments>1</ButtonComments>
              </li>
              <li>
                <ButtonRetweet>4</ButtonRetweet>
              </li>
              <li>
                <ButtonLoves>2</ButtonLoves>
              </li>
              <li>
                <ButtonEnvelope />
              </li>
            </ActionList>
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
            <TweetHeader>
              <TweetHeaderFullName href="">Every Interaction</TweetHeaderFullName>
              <TweetHeaderUserName>@EveryInteract</TweetHeaderUserName>
              <Time>
                <TimeLink href="">Nov 18</TimeLink>
              </Time>
            </TweetHeader>
            <TextSmall>
              Variable web fonts are coming, and will open a world of opportunities
              for weight use online
            </TextSmall>
            <TweetLink>
              <div>
                <TweetLinkImage
                  src={process.env.PUBLIC_URL + "/img/img2.png"}
                  srcSet={process.env.PUBLIC_URL + `${"/img/img2-retina.png"} 2x`}
                  alt=""
                />
              </div>
              <TweetLinkContent>
                <TweetLinkTitle>The Future of Web Fonts</TweetLinkTitle>
                <TweetLinkText>
                  We love typefaces. They give our sites and applications
                  personalized feel. They convey the information and tell a story.
                  They establish information hierarchy. But they’re…
                </TweetLinkText>
                <TweetLinkUrl>viliamis.com</TweetLinkUrl>
              </TweetLinkContent>
            </TweetLink>
            <ActionList>
              <li>
                <ButtonComments />
              </li>
              <li>
                <ButtonRetweet />
              </li>
              <li>
                <ButtonLoves />
              </li>
              <li>
                <ButtonEnvelope />
              </li>
            </ActionList>
          </Content>
        </Main>
      </Tweet>
    </Wrapper>
  );
};

export default Tweets;
