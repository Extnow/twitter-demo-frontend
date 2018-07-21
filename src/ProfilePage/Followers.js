import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import userInfoFetchData from '../complexes/actions';
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

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: url => dispatch(userInfoFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Followers);
