import React, { Component } from "react";
import styled from "styled-components";
// css
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
// components
import Header from "./Header";
import Banner from "./Banner";
import {
  Statistics,
  Numbers,
  Actions,
  FollowButton,
  ActionButton
} from "./Statistics";
import ProfileInfo from "./ProfileInfo";
import Tweets from "./Tweets";
// router
import { BrowserRouter } from "react-router-dom";

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
      <BrowserRouter>
        <div className="App">
          <Header />
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
      </BrowserRouter>
    );
  }
}

export default App;
