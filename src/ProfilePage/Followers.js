import React from 'react';
import styled from 'styled-components';
import Follower from './Follower';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

export default class Followers extends React.Component {
  state = {
    followers: [],
    error: null,
  };

  componentDidMount() {
    this.getFollowers();
  }

  componentDidUpdate(prevProps) {
    const { type } = this.props;

    if (prevProps.type !== type) {
      this.getFollowers();
    }
  }

  getFollowers = () => {
    const host = 'https://twitter-demo.erodionov.ru';
    const accesToken = process.env.REACT_APP_ACCESS_TOKEN;
    const { id } = this.props;
    const { type } = this.props;

    fetch(`${host}/api/v1/accounts/${id}/${type}?access_token=${accesToken}`)
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
  };

  render() {
    const { followers, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <Wrapper>
        {followers.map(name => (
          <Follower
            key={name.id}
            id={name.id}
            banner={name.header_static}
            fullName={name.display_name}
            userName={name.username}
          />
        ))}
      </Wrapper>
    );
  }
}
