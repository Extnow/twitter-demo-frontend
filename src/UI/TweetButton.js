// @flow

import styled from 'styled-components';

export default styled.button`
  background-color: #4ab3f4;
  border-radius: 100px;
  border: 1px solid #4ab3f4;
  color: #fff;
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: ${({ small }) => (small ? '9px 16px' : '11px 34px')};
  cursor: pointer;
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    background-color: #1da1f2;
  }

  &:active {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #4ab3f4;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #a4d9f9;
  }
`;
