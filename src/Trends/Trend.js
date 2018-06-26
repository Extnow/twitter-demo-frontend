import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';

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

export default ({ title, description, count }) => (
  <Trend>
    <StLink to={`/search?q=${title}`}>
      <Title>
        {title}
      </Title>
      <Text>
        {description}
      </Text>
      {count > 0 && (
        <Text>
          <FormattedNumber value={count} />
          {count > 1 ? ' Tweets' : ' Tweet'}
        </Text>
      )}
    </StLink>
  </Trend>
);
