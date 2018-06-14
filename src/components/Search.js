import React from "react";
import styled from "styled-components";
import magnifierLogo from "./../img/Icon_Magnifier.svg";

const SearchInput = styled.input`
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
  padding: 9px 61px 8px 11px;
  font-size: 12px;
  background-image: url(${magnifierLogo});
  background-repeat: no-repeat;
  background-position: 193px 50%;
`;

const Search = function() {
  return <SearchInput placeholder="Search Twitter" type="text" />;
};

export default Search;
