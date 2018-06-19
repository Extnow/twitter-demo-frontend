import React from "react";
import styled from "styled-components";
// img
import iconMore from "./img/icon-more.png";
// router
import { NavLink } from "react-router-dom";

const Statistics = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0px 2px 2px #b0b8be;
  font-family: Helvetica;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavigationLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #707e88;
  text-align: center;
  padding: 0 10px;
  font-size: 12px;
  font-weight: bold;
  padding: 11px 15px;
  cursor: pointer;
  border-bottom: 3px solid transparent;

  &:hover {
    color: #1da1f2;
    border-bottom: 3px solid #1da1f2;
  }

  &:focus {
    outline: none;
    color: #1da1f2;
    border-bottom: 3px solid #1da1f2;
  }

  &.active {
    color: #1da1f2;
    border-bottom: 3px solid #1da1f2;
  }
`;

const Value = styled.div`
  padding-top: 5px;
  font-size: 18px;
`;

const Actions = styled.div`
  display: flex;
`;

const Follow = styled.button`
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  color: #1da1f2;
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 9px 27px;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    background-color: #e8f5fd;
  }

  &:active {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }
`;

const ExtraActions = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;

  &:before {
    content: "";
    display: block;
    width: 4px;
    height: 14px;
    background-image: url(${iconMore});
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 2px 4px rgba(0, 153, 153, 0.4);
  }
`;

export default function() {
  return (
    <Statistics>
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-3 col-xs-9">
            <Wrapper>
              <Navigation>
                <li>
                  <NavigationLink to="/">
                    <span>Tweets</span>
                    <Value>8,058</Value>
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/EveryInteract/following">
                    <span>Following</span>
                    <Value>721</Value>
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/EveryInteract/followers">
                    <span>Followers</span>
                    <Value>1,815</Value>
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/EveryInteract/likes">
                    <span>Likes</span>
                    <Value>460</Value>
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/EveryInteract/lists">
                    <span>Lists</span>
                    <Value>2</Value>
                  </NavigationLink>
                </li>
              </Navigation>
              <Actions>
                <Follow>Follow</Follow>
                <ExtraActions />
              </Actions>
            </Wrapper>
          </div>
        </div>
      </div>
    </Statistics>
  );
}
