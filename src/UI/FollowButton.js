// @flow

import styled from 'styled-components';

export default styled.button`
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  color: #1da1f2;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  padding: ${({ small }) => (small ? '5px 22px' : '9px 27px')};
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
