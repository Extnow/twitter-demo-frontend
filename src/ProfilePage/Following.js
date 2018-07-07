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
    error: null,
  };

  componentDidMount() {
    const host = 'https://twitter-demo.erodionov.ru';
    const accesToken = process.env.REACT_APP_ACCESS_TOKEN;
    const { id } = this.props;

    fetch(`${host}/api/v1/accounts/${id}/following?access_token=${accesToken}`)
      .then(response => response.json())
      .then(
        (followers) => {
          this.setState({
            followers,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        },
      );
  }

  render() {
    const { followers, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    const followersName = followers.map(name => <Follower key={name.id}>{name.username}</Follower>);

    return <Wrapper>{followersName}</Wrapper>;
  }
}
