import React, { Component } from "react";
import styled from "styled-components";
// css
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
// components
import Header from "./Header";
import Statistics from "./Statistics";
import ProfileInfo from "./ProfileInfo";
import Tweets from "./Tweets";
// router
import { BrowserRouter } from "react-router-dom";

const Profile = styled.div`
  background-color: #e6ecf0;
  position: relative;
  font-family: Helvetica Neue, Helvetica, sans-serif;
`;

const Banner = styled.div`
  height: 380px;
  background-image: url(${"/img/banner.png"});
  background-repeat: no-repeat;
  background-size: cover;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Banner />
          <Statistics />
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
