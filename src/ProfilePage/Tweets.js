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

export default class Tweets extends React.Component {
  state = {
    tweetsInfo: [],
    error: null,
    isLoaded: false,
  };

  componentDidMount() {
    const host = 'https://twitter-demo.erodionov.ru';
    const accesToken = process.env.REACT_APP_ACCESS_TOKEN;
    const id = 1;

    fetch(`${host}/api/v1/accounts/${id}/statuses?access_token=${accesToken}`)
      .then(response => response.json())
      .then(
        (tweetsInfo) => {
          this.setState({
            isLoaded: true,
            tweetsInfo,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { tweetsInfo, error, isLoaded } = this.state;
    const { userInfo } = this.props;

    const tweetsList = tweetsInfo.map(tweet => (
      <Tweet
        key={tweet.id}
        pinned={tweet.pinned}
        avatarSrc={tweet.account.avatar_static}
        avatarAlt={tweet.account.display_name}
        fullName={tweet.account.display_name}
        userName={tweet.account.username}
        time={tweet.created_at}
        pictureSrc={tweet.media_attachments}
        text={tweet.content}
        lovesValue={tweet.favourites_count}
        retweetValue={tweet.reblogs_count}
      />
    ));

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <Wrapper>
        <Navigation>
          <li>
            <NavigationLink to={`/${userInfo.username}`} exact>
              Tweets
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to={`/${userInfo.username}/with-replies`}>
              Tweets & replies
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to={`/${userInfo.username}/media`}>Media</NavigationLink>
          </li>
        </Navigation>
        <Switch>
          <Route path={`/${userInfo.username}/with-replies`} component={TemplatePage} />
          <Route path={`/${userInfo.username}/media`} component={TemplatePage} />
          <Route path={`/${userInfo.username}`} render={() => tweetsList} />
        </Switch>
      </Wrapper>
    );
  }
}
