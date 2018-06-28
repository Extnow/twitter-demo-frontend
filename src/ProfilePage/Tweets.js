import React from 'react';
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
// components
import Tweet from './Tweet';
import TemplatePage from '../TemplatePage';

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

const NavigationLink = styled(NavLink)`
  display: block;
  text-decoration: none;
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

  &.active {
    color: #14171a;
  }
`;

export default ({ match }) => {
  const tweets = [
    {
      id: 1,
      isPinned: true,
      avatarSrc: 'avatar-medium.png',
      avatarSrcSet: 'avatar-medium-retina.png',
      avatarAlt: 'avatar',
      fullName: 'Every Interaction',
      userName: 'EveryInteract',
      time: '2 Mar 2015',
      text:
        'We’ve made some more resources for all you wonderful <a target="_blank" href="#">#design</a> folk <a target="_blank" href="everyinteraction.com/resources/">http://www.everyinteraction.com/resources/</a> <a target="_blank" href="#">#webdesign</a> <a target="_blank" href="#">#UI</a>',
      picture: true,
      pictureSrc: 'img1.png',
      pictureSrcSet: 'img1-retina.png',
      retweetValue: 17,
      lovesValue: 47,
    },
    {
      id: 2,
      avatarSrc: 'avatar-medium.png',
      avatarSrcSet: 'avatar-medium-retina.png',
      avatarAlt: 'avatar',
      fullName: 'Every Interaction',
      userName: 'EveryInteract',
      time: '23h',
      text:
        'Our new website concept; Taking you from… @ Every Interaction <a target="_blank" href="https://www.instagram.com/p/BNFGrfhBP3M/">instagram.com/p/BNFGrfhBP3M/</a>',
      commentValue: 1,
      retweetValue: 4,
      lovesValue: 2,
    },
    {
      id: 3,
      avatarSrc: 'avatar-medium.png',
      avatarSrcSet: 'avatar-medium-retina.png',
      avatarAlt: 'avatar',
      fullName: 'Every Interaction',
      userName: 'EveryInteract',
      time: 'Nov 18',
      text:
        'Variable web fonts are coming, and will open a world of opportunities for weight use online',
      quote: true,
      quoteSrc: 'img2.png',
      quoteSrcSet: 'img2-retina.png',
      quoteTitle: 'The Future of Web Fonts',
      quoteText:
        'We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…',
      quoteLink: 'vilijamis.com',
    },
  ];

  const tweetsList = tweets.map(tweet => (
    <Tweet
      key={tweet.id}
      pinned={tweet.isPinned}
      avatarSrc={`${process.env.PUBLIC_URL} /img/${tweet.avatarSrc}`}
      avatarSrcSet={`${process.env.PUBLIC_URL} /img/${tweet.avatarSrcSet}} 2x`}
      avatarAlt={tweet.avatarAlt}
      fullName={tweet.fullName}
      userName={tweet.userName}
      time={tweet.time}
      text={tweet.text}
      picture={tweet.picture}
      pictureSrc={`${process.env.PUBLIC_URL} /img/${tweet.pictureSrc}`}
      pictureSrcSet={`${process.env.PUBLIC_URL} /img/${tweet.pictureSrcSet}} 2x`}
      quote={tweet.quote}
      quoteSrc={`${process.env.PUBLIC_URL} /img/${tweet.quoteSrc}`}
      quoteSrcSet={`${process.env.PUBLIC_URL} /img/${tweet.quoteSrcSet}} 2x`}
      quoteTitle={tweet.quoteTitle}
      quoteText={tweet.quoteText}
      quoteLink={tweet.quoteLink}
      commentValue={tweet.commentValue}
      retweetValue={tweet.retweetValue}
      lovesValue={tweet.lovesValue}
    />
  ));

  return (
    <Wrapper>
      <Navigation>
        <li>
          <NavigationLink to={`${match.url}`} exact>
            Tweets
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to={`${match.url}/with_replies`}>
Tweets & replies
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to={`${match.url}/media`}>
Media
          </NavigationLink>
        </li>
      </Navigation>
      <Switch>
        <Route path={`${match.url}/with_replies`} component={TemplatePage} />
        <Route path={`${match.url}/media`} component={TemplatePage} />
        <Route path={`${match.url}`} render={() => tweetsList} />
      </Switch>
    </Wrapper>
  );
};
