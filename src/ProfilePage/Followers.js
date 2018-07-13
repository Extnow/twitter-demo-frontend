// @flow

import React from 'react';
import styled from 'styled-components';
import Follower from './Follower';
import { host, accesToken } from '../utils';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

export default class Followers extends React.Component<
  {
    id: number,
    type: string,
  },
  {
    followers: Array<Object>,
  },
> {
  state = {
    followers: [],
  };

  componentDidMount() {
    this.getFollowers();
  }

  componentDidUpdate(prevProps: typeof Followers.prototype.props) {
    const { type } = this.props;

    if (prevProps.type !== type) {
      this.getFollowers();
    }
  }

  getFollowers = () => {
    const { id } = this.props;
    const { type } = this.props;

    fetch(`${host}/api/v1/accounts/${id}/${type}?access_token=${accesToken}`)
      .then(response => response.json())
      .then((followers) => {
        this.setState({
          followers,
        });
      });
  };

  render() {
    const { followers } = this.state;

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
