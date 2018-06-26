import React from "react";
import styled from "styled-components";
// router
import { Link } from "react-router-dom";
// libraries
import { FormattedNumber } from "react-intl";

const Trend = styled.div`
  margin-bottom: 10px;
  line-height: 20px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 15px;
  color: #1da1f2;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.p`
  font-size: 12px;
  color: #657786;
  margin: 0;
`;

export default function(props) {
  return (
    <Trend>
      <StLink to={`/search?q=${props.title}`}>
        <Title>{props.title}</Title>
        <Text>{props.description}</Text>
        {props.count > 0 && (
          <Text>
            <FormattedNumber value={props.count} />
            {props.count > 1 ? " Tweets" : " Tweet"}
          </Text>
        )}
      </StLink>
    </Trend>
  );
}
