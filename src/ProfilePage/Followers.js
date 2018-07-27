// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Follower from './Follower';
import { host, accesToken } from '../utils';
import type { UserData, FollowersData } from '../types';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

type Props = {
  type: string,
  userInfo: UserData,
};

type State = {
  followers: FollowersData,
};

class Followers extends React.Component<Props, State> {
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
    const { userInfo, type } = this.props;

    fetch(`${host}/api/v1/accounts/${userInfo.id}/${type}?access_token=${accesToken}`)
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

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  hasError: state.userInfoHasError,
  isLoading: state.userInfoIsLoading,
});

export default connect(mapStateToProps)(Followers);
