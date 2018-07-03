import React from 'react';
import styled from 'styled-components';

const Banner = styled.img`
  margin-top: 45px;
  display: block;
  height: 380px;
  width: 100%;
  object-fit: cover;
`;

export default class extends React.Component {
  state = {
    userInfo: {},
    error: null,
    isLoaded: false,
  };

  componentDidMount() {
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/1?access_token=${
        process.env.REACT_APP_ACCESS_TOKEN
      }`,
    )
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            userInfo: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        },
      );
  }

  render() {
    const { userInfo, error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return <Banner src={userInfo.header_static} alt="banner" />;
  }
}
