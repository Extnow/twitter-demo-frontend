import React, { Component } from "react";
import styled from "styled-components";
// images
import iconTwitterLogo from "./img/icon-twitter-logo.svg";
// css
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
// components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NavigationExtra from "./components/NavigationExtra";
import Banner from "./components/Banner";
import {
  Statistics,
  Numbers,
  Actions,
  FollowButton,
  ActionButton
} from "./components/Statistics";
import ProfileInfo from "./components/ProfileInfo";
import Tweets from "./components/Tweets";
// router

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TwitterLogo = styled.img`
  position: absolute;
  left: 50%;
`;

const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div`
  background-color: #e6ecf0;
  position: relative;
  font-family: Helvetica Neue, Helvetica, sans-serif;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <div className="container">
            <HeaderWrapper>
              <Navigation />
              <TwitterLogo src={iconTwitterLogo} alt="twitterLogo" />
              <NavigationExtra />
            </HeaderWrapper>
          </div>
        </Header>
        <Banner />
        <Statistics>
          <div className="container">
            <div className="row">
              <div className="col-xs-offset-3 col-xs-9">
                <StatisticsWrapper>
                  <Numbers />
                  <Actions>
                    <FollowButton>Follow</FollowButton>
                    <ActionButton />
                  </Actions>
                </StatisticsWrapper>
              </div>
            </div>
          </div>
        </Statistics>
        <Profile>
          <div className="container">
            <div className="row">
              <div className="col-xs-3">
                <ProfileInfo />
              </div>
              <div className="col-xs-6">
                <Tweets />
              </div>
            </div>
          </div>
        </Profile>
      </div>
    );
  }
}

export default App;
