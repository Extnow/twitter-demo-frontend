import React from "react";
import styled from "styled-components";

const Trend = styled.div`
  margin-bottom: 10px;
`;

const HashTag = styled.a`
  font-size: 15px;
  line-height: 20px;
  color: #1da1f2;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Statistics = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #657786;
`;

export default function(props) {
  return (
    <Trend>
      <HashTag href="#">{props.hashTag}</HashTag>
      <Statistics>{props.text}</Statistics>
    </Trend>
  );
}
