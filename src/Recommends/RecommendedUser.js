import React from "react";
import styled from "styled-components";
// img
import iconTick from "./img/icon-tick.svg";
import iconClose from "./img/icon-close.svg";

const User = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
  border-bottom: 1px solid #e6ecf0;
  position: relative;
`;

const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Img = styled.img`
  display: block;
  width: 48px;
  height: 48px;
`;

const Content = styled.div`
  padding-left: 60px;
  overflow: hidden;
  padding-bottom: 11px;
  padding-right: 20px;
`;

const Link = styled.a`
  display: block;
  flex-direction: column;
  text-decoration: none;
`;

const Name = styled.div`
  margin-bottom: 9px;
  display: flex;
  align-items: center;
`;

const FullName = styled.span`
  color: #14171a;
  font-size: 13px;
  font-weight: bold;
  margin-right: 5px;
  white-space: nowrap;

  &:hover {
    color: #1da1f2;
    text-decoration: underline;
  }
`;

const Tick = styled.img`
  margin-right: 5px;
`;

const UserName = styled.span`
  font-size: 13px;
  color: #657786;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  width: 100%;
`;

const Follow = styled.button`
  display: block;
  border: 1px solid #1da1f2;
  background-color: #fff;
  border-radius: 100px;
  padding: 5px 22px;
  font-size: 14px;
  text-align: center;
  color: #1da1f2;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    background-color: #e8f5fd;
  }

  &:active {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #1da1f2;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }
`;

const Close = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: auto;
  padding: 0;
`;

const CloseIcon = styled.img`
  display: block;
  padding: 2px;
  width: 8px;
  height: 8px;
`;

export default function(props) {
  return (
    <User>
      <Content>
        <Link href="#">
          <ImgWrapper>
            <Img src={props.src} srcSet={props.srcSet} alt={props.name} />
          </ImgWrapper>
          <Name>
            <FullName>{props.fullName}</FullName>
            {props.isTicked && <Tick src={iconTick} alt="tick" />}
            <UserName>{props.userName}</UserName>
          </Name>
        </Link>
        <div>
          <Follow>Follow</Follow>
        </div>
      </Content>
      <Close>
        <CloseIcon src={iconClose} alt="close button" />
      </Close>
    </User>
  );
}
