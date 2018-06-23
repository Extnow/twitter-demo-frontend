import React from "react";
import styled from "styled-components";
// router
import { Link } from "react-router-dom";
// libraries
import { IntlProvider, FormattedNumber } from "react-intl";

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

const Text = styled.p`
  font-size: 12px;
  color: #657786;
  margin: 0;
`;

export default function(props) {
  return (
    <Trend>
      <StLink to={`/search?q=${props.to}`}>{props.to}</StLink>
      <Text>{props.description}</Text>
      {props.count > 0 && (
        <Text>
          <IntlProvider locale="en">
            <FormattedNumber value={props.count} />
          </IntlProvider>
          {props.count > 1 ? " Tweets" : " Tweet"}
        </Text>
      )}
    </Trend>
  );
}
