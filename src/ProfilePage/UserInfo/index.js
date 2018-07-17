// @flow

import React from 'react';
// components
import List from './List';
import Follower from './Follower';
import Media from './Media';
import User from './User';
import { host, accesToken } from '../../utils';
// img
import iconFollowers from './img/icon-followers.svg';
import iconPhotos from './img/icon-photos.svg';

type Props = {
  userInfo: Object,
  id: number,
}

type State = {
  mediaFiles: Array<Object>,
  followers: Array<Object>,
}

export default class UserInfo extends React.Component<Props, State> {
  state = {
    mediaFiles: [],
    followers: [],
  };

  componentDidMount() {
    this.getMediaFiles();
    this.getFollowers();
  }

  getMediaFiles = () => {
    const { id } = this.props;

    fetch(`${host}/api/v1/accounts/${id}/statuses?only_media=yes&access_token=${accesToken}`)
      .then(response => response.json())
      .then((mediaFiles) => {
        this.setState({ mediaFiles });
      });
  };

  getFollowers = () => {
    const { id } = this.props;

    fetch(`${host}/api/v1/accounts/${id}/followers?access_token=${accesToken}`)
      .then(response => response.json())
      .then((followers) => {
        this.setState({ followers });
      });
  };

  render() {
    const { mediaFiles, followers } = this.state;
    const { userInfo } = this.props;

    const mediaAttachments = mediaFiles.map(media => media.media_attachments);
    const media = [].concat(...mediaAttachments);

    return (
      <div>
        <User
          key={userInfo.id}
          id={userInfo.id}
          src={userInfo.avatar_static}
          userName={userInfo.username}
          fullName={userInfo.display_name}
          url={userInfo.url}
          bio={userInfo.note}
          website={userInfo.url}
          websiteUrl={userInfo.url}
          joined={userInfo.created_at}
        />
        <List
          title={`${userInfo.followers_count} Followers you know`}
          to={`/${userInfo.id}/followers_you_follow`}
          icon={iconFollowers}
        >
          {followers.map(follower => (
            <Follower
              key={follower.id}
              src={follower.avatar}
              srcSet={follower.avatar}
              fullName={follower.display_name}
              to={follower.id}
            />
          ))}
        </List>
        <List
          title={`${media.length} Photos and videos`}
          to={`/${userInfo.id}/media`}
          icon={iconPhotos}
        >
          <Media media={media} />
        </List>
      </div>
    );
  }
}
