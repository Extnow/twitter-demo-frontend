import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
// components
import Statistics from "./Statistics";
import ProfileInfo from "./ProfileInfo";
import Tweets from "./Tweets";

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
