// @flow

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';

import { connect } from 'react-redux';
import userInfoFetchData from '../complexes/actions';
// components
import Statistics from './Statistics';
import Tweets from './Tweets';
import Recommends from '../Recommends';
import Trends from '../Trends';
import Footer from '../Footer';
import UserInfo from './UserInfo';
import Followers from './Followers';
import { host, accesToken } from '../utils';

const Profile = styled.div`
  background-color: #e6ecf0;
  position: relative;
  font-family: Helvetica Neue, Helvetica, sans-serif;
`;

const Banner = styled.img`
  display: block;
  height: 380px;
  width: 100%;
  object-fit: cover;
`;

const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 30px;
`;

type Props = {
  match: Match,
};

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

type State = {
  userInfo: ?UserData,
  error: ?Object,
  isLoaded: boolean,
};

class ProfilePage extends React.Component<Props, State> {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      fetchUserInfo,
    } = this.props;

    fetchUserInfo(`${host}/api/v1/accounts/${id}?access_token=${accesToken}`);
  }

  componentDidUpdate(prevProps: Props) {
    const { match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      const {
        match: {
          params: { id },
        },
        fetchUserInfo,
      } = this.props;

      fetchUserInfo(`${host}/api/v1/accounts/${id}?access_token=${accesToken}`);
    }
  }

  render() {
    const userInfo = this.props;
    const hasError = this.props;
    const isLoading = this.props;

    if (hasError) {
      return <NotFound>User Not Found</NotFound>;
    }

    if (userInfo && userInfo.error) {
      return <NotFound>Sorry, user no found</NotFound>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!userInfo) {
      return <NotFound>No user data</NotFound>;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>
            {userInfo.display_name} (@{userInfo.username}) | Twitter
          </title>
        </Helmet>
        <main>
          <Banner src={userInfo.header_static} alt="banner" />
          <Statistics userInfo={userInfo} />
          <Profile>
            <div className="container">
              <div className="row">
                <div className="col-xs-3">
                  <UserInfo id={userInfo.id} userInfo={userInfo} />
                </div>
                <div className="col-xs-6">
                  <Switch>
                    <Route
                      path={`/${userInfo.id}/following`}
                      render={() => <Followers id={userInfo.id} type="following" />}
                    />
                    <Route
                      path={`/${userInfo.id}/followers`}
                      render={() => <Followers id={userInfo.id} type="followers" />}
                    />
                    <Route
                      path={`/${userInfo.id}`}
                      render={() => <Tweets id={userInfo.id} userInfo={userInfo} />}
                    />
                  </Switch>
                </div>
                <div className="col-xs-3">
                  <Recommends />
                  <Trends />
                  <Footer />
                </div>
              </div>
            </div>
          </Profile>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  hasError: state.userInfoHasError,
  isLoading: state.userInfoIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: url => dispatch(userInfoFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
