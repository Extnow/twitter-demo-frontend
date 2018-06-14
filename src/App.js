import React, { Component } from "react";
import styled from "styled-components";
// images
import twitterLogo from "./img/Icon_Twitter Logo.svg";
import avatar from "./img/Avatar.png";
// css
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
// components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import TweetButton from "./components/TweetButton";
import Banner from "./components/Banner";
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// // import { render } from "react-dom";

const Logo = function() {
  return <img src={twitterLogo} alt="twitterLogo" />;
};

const Avatar = function() {
  return (
    <a href="">
      <img src={avatar} alt="avatar" />
    </a>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <div className="container">
            <HeaderWrapper>
              <Navigation />
              <Logo />
              <Search />
              <Avatar />
              <TweetButton />
            </HeaderWrapper>
          </div>
        </Header>
        <Banner />
      </div>
    );
  }
}

export default App;
