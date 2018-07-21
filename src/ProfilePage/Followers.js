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

type Props = {
  type: string,
  id: string,
};

type State = {
  followers: Array<{
    id: string,
    username: string,
    acct: string,
    display_name: string,
    locked: boolean,
    bot: boolean,
    created_at: string,
    note: string,
    url: string,
    avatar: string,
    avatar_static: string,
    header: string,
    header_static: string,
    followers_count: number,
    following_count: number,
    statuses_count: number,
    emojis: (?Object)[],
    fields: (?Object)[],
  }>,
};

export default class Followers extends React.Component<Props, State> {
  state = {
    followers: [],
  };

  componentDidMount() {
    this.getFollowers();
  }

  componentDidUpdate(prevProps: Props) {
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
