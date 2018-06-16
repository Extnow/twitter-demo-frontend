import React from "react";
import styled from "styled-components";
// components
import Statistics from "./Statistics";
import ProfileInfo from "./ProfileInfo";

const Banner = styled.div`
  height: 380px;
  background-image: url(${"/img/banner.png"});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function() {
  return (
    <div>
      <Banner />
      <Statistics />
      <ProfileInfo />
    </div>
  );
}
