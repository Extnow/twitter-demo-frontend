import React from "react";
import styled from "styled-components";
// img
import iconMore from "./img/icon-more.png";

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

const ButtonsList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  color: #707e88;
  background-color: transparent;
  border: none;
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
`;

const Value = styled.div`
  padding-top: 5px;
  font-size: 18px;
`;

const Actions = styled.div`
  display: flex;
`;

const FollowButton = styled.button`
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

const ActionButton = styled.button`
  border: none;
  background: transparent;
  background-image: url(${iconMore});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  cursor: pointer;
`;

export default function() {
  return (
    <Statistics>
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-3 col-xs-9">
            <Wrapper>
              <ButtonsList>
                <li>
                  <Button>
                    <span>Tweets</span>
                    <Value>8,058</Value>
                  </Button>
                </li>
                <li>
                  <Button>
                    <span>Following</span>
                    <Value>721</Value>
                  </Button>
                </li>
                <li>
                  <Button>
                    <span>Followers</span>
                    <Value>1,815</Value>
                  </Button>
                </li>
                <li>
                  <Button>
                    <span>Likes</span>
                    <Value>460</Value>
                  </Button>
                </li>
                <li>
                  <Button>
                    <span>Lists</span>
                    <Value>2</Value>
                  </Button>
                </li>
              </ButtonsList>
              <Actions>
                <FollowButton>Follow</FollowButton>
                <ActionButton />
              </Actions>
            </Wrapper>
          </div>
        </div>
      </div>
    </Statistics>
  );
}
