// @flow

import React from 'react';
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import userInfoFetchData from '../complexes/actions';
// components
import Tweet from './Tweet';
import TemplatePage from '../TemplatePage';
import { host, accesToken } from '../utils';

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

type UserData = {
  id: string,
  username: string,
  avatar: string,
  acct: string,
  display_name: string,
  locked: boolean,
  bot: boolean,
  created_at: string,
  note: string,
  url: string,
  avatar: string,
  avatar_static: string,
  header: string,
  header_static: string,
  followers_count: number,
  following_count: number,
  statuses_count: number,
  emojis: (?Object)[],
  fields: (?Object)[],
  error?: string,
};

type Props = {
  userInfo: UserData,
};

type State = {
  tweetsInfo: Array<{
    id: string,
    created_at: string,
    in_reply_to_id: ?string,
    in_reply_to_account_id: ?string,
    sensitive: boolean,
    spoiler_text: string,
    visibility: string,
    language: string,
    uri: string,
    content: string,
    url: string,
    reblogs_count: number,
    favourites_count: number,
    favourited: boolean,
    reblogged: boolean,
    muted: boolean,
    pinned: boolean,
    reblog: ?string,
    application: Object,
    account: Object,
    media_attachments: Array<Object>,
    mentions: (?Object)[],
    tags: (?Object)[],
    emojis: (?Object)[],
  }>,
  error: ?Object,
};

class Tweets extends React.Component<Props, State> {
  state = {
    tweetsInfo: [],
    error: null,
  };

  componentDidMount() {
    const { userInfo } = this.props;

    fetch(`${host}/api/v1/accounts/${userInfo.id}/statuses?access_token=${accesToken}`)
      .then(response => response.json())
      .then(
        (tweetsInfo) => {
          this.setState({
            tweetsInfo,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        },
      );
  }

  render() {
    const { tweetsInfo, error } = this.state;
    const { userInfo } = this.props;

    const tweetsList = tweetsInfo.map(tweet => (
      <Tweet
        id={userInfo.id}
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

    return (
      <Wrapper>
        <Navigation>
          <li>
            <NavigationLink to={`/${userInfo.id}`} exact>
              Tweets
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to={`/${userInfo.id}/with-replies`}>Tweets & replies</NavigationLink>
          </li>
          <li>
            <NavigationLink to={`/${userInfo.id}/media`}>Media</NavigationLink>
          </li>
        </Navigation>
        <Switch>
          <Route path={`/${userInfo.id}/with-replies`} component={TemplatePage} />
          <Route path={`/${userInfo.id}/media`} component={TemplatePage} />
          <Route path={`/${userInfo.id}`} render={() => tweetsList} />
        </Switch>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  hasError: state.userInfoHasError,
  isLoading: state.userInfoIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: id => dispatch(userInfoFetchData(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tweets);
