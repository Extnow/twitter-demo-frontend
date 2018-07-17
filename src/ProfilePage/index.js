// @flow

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
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
  match: Object,
};

type State = {
  userInfo: Object,
  error: Object | null,
  isLoaded: boolean,
};

export default class ProfilePage extends React.Component<Props, State> {
  state = {
    userInfo: {},
    error: null,
    isLoaded: false,
  };

  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate(prevProps: Props) {
    const { match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      this.getUserInfo();
    }
  }

  getUserInfo = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    fetch(`${host}/api/v1/accounts/${id}?access_token=${accesToken}`)
      .then(response => response.json())
      .then(
        (userInfo) => {
          this.setState({
            isLoaded: true,
            userInfo,
          });
        },
        (error) => {
          this.setState({ error });
        },
      );
  };

  render() {
    const { userInfo, error, isLoaded } = this.state;

    if (error) {
      return <NotFound>{error.message}</NotFound>;
    }
    if (userInfo.error) {
      return <NotFound>Sorry, user no found</NotFound>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
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
