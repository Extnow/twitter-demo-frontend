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
import TemplatePage from '../TemplatePage';
import Banner from './Banner';
import UserInfo from './UserInfo';

const Profile = styled.div`
  background-color: #e6ecf0;
  position: relative;
  font-family: Helvetica Neue, Helvetica, sans-serif;
`;

export default class ProfilePage extends React.Component {
  state = {
    userInfo: [],
    error: null,
    isLoaded: false,
  };

  componentDidMount() {
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/1?access_token=${
        process.env.REACT_APP_ACCESS_TOKEN
      }`,
    )
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            userInfo: result,
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
    const { userInfo, error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Every Interaction (@EveryInteract) | Twitter</title>
        </Helmet>
        <main>
          <Banner userInfo={userInfo} />
          <Statistics userInfo={userInfo} />
          <Profile>
            <div className="container">
              <div className="row">
                <div className="col-xs-3">
                  <UserInfo userInfo={userInfo} />
                </div>
                <div className="col-xs-6">
                  <Switch>
                    <Route path={`/${userInfo.username}/following`} component={TemplatePage} />
                    <Route path={`/${userInfo.username}/followers`} component={TemplatePage} />
                    <Route
                      path={`/${userInfo.username}`}
                      render={() => <Tweets userInfo={userInfo} />}
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
