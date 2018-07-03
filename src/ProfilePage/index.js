import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
// components
import Statistics from './Statistics';
import UserInfo from './UserInfo';
import Tweets from './Tweets';
import Recommends from '../Recommends';
import Trends from '../Trends';
import Footer from '../Footer';
import TemplatePage from '../TemplatePage';
import Banner from './Banner';


const Profile = styled.div`
  background-color: #e6ecf0;
  position: relative;
  font-family: Helvetica Neue, Helvetica, sans-serif;
`;

export default ({ match }) => {
  const { username } = match.params;
  return (
    <React.Fragment>
      <Helmet>
        <title>Every Interaction (@EveryInteract) | Twitter</title>
      </Helmet>
      <main>
        <Banner />
        <Statistics match={match} />
        <Profile>
          <div className="container">
            <div className="row">
              <div className="col-xs-3">
                <UserInfo username={username} />
              </div>
              <div className="col-xs-6">
                <Switch>
                  <Route path={`${match.url}/following`} component={TemplatePage} />
                  <Route path={`${match.url}/followers`} component={TemplatePage} />
                  <Route path={`${match.url}/likes`} component={TemplatePage} />
                  <Route path={`${match.url}/lists`} component={TemplatePage} />
                  <Route path={`${match.url}`} component={Tweets} />
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
};
