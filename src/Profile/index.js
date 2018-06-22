import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
// components
import Statistics from "./Statistics";
import Sidebar from "./Sidebar";
import Tweets from "./Tweets";
import Recommends from "../Recommends";
import Trends from "../Trends";
import Footer from "../Footer";

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

export default function() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Every Interaction (@EveryInteract) | Twitter</title>
      </Helmet>
      <Banner src={process.env.PUBLIC_URL + "/img/banner.png"} alt="banner" />
      <Statistics />
      <Profile>
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <Sidebar />
            </div>
            <div className="col-xs-6">
              <Tweets />
            </div>
            <div className="col-xs-3">
              <Recommends />
              <Trends />
              <Footer />
            </div>
          </div>
        </div>
      </Profile>
    </div>
  );
}
