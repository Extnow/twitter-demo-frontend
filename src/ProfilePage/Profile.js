import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
// components
import Statistics from './Statistics';
import UserInfo from './UserInfo';
import Tweets from './Tweets';
import Recommends from '../Recommends';
import Trends from '../Trends';
import Footer from '../Footer';
import OtherPage from '../OtherPage';

const Banner = styled.img`
  display: block;
  height: 380px;
  width: 100%;
  object-fit: cover;
`;

const Profile = styled.div`
  background-color: #e6ecf0;
  position: relative;
  font-family: Helvetica Neue, Helvetica, sans-serif;
`;

export default ({
  match,
  match: {
    params: { username },
  },
}) => (
  <main>
    <Banner src={`${process.env.PUBLIC_URL}/img/banner.png`} alt="banner" />
    <Statistics match={match} />
    <Profile>
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <UserInfo username={username} />
          </div>
          <div className="col-xs-6">
            <Switch>
              <Route path={`${match.url}/following`} component={OtherPage} />
              <Route path={`${match.url}/followers`} component={OtherPage} />
              <Route path={`${match.url}/likes`} component={OtherPage} />
              <Route path={`${match.url}/lists`} component={OtherPage} />
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
);
