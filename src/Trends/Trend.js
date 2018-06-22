import React from "react";
import styled from "styled-components";
// router
import { Link } from "react-router-dom";

const Trend = styled.div`
  margin-bottom: 10px;
  line-height: 20px;
`;

const StLink = styled(Link)`
  font-size: 15px;
  color: #1da1f2;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.div`
  font-size: 12px;
  color: #657786;
`;

export default function(props) {
  return (
    <Trend>
      <StLink to={`/search?q=${props.to}`}>{props.name}</StLink>
      <Text>{props.description}</Text>
      {props.isCount && <Text>{props.count} Tweets</Text>}
    </Trend>
  );
}
