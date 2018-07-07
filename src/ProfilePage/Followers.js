import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 10px;
  background-color: #fff;
`;

const Follower = styled.div``;

export default class Followers extends React.Component {
  state = {
    followers: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    const host = 'https://twitter-demo.erodionov.ru';
    const accesToken = process.env.REACT_APP_ACCESS_TOKEN;
    const { id } = this.props;

    fetch(`${host}/api/v1/accounts/${id}/followers?access_token=${accesToken}`)
      .then(response => response.json())
      .then(
        (followers) => {
          this.setState({
            isLoaded: true,
            followers,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { followers, error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    const followersName = followers.map(name => <Follower key={name.id}>{name.username}</Follower>);

    return <Wrapper>{followersName}</Wrapper>;
  }
}
