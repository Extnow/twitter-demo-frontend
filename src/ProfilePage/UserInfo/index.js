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

type UserData = {
  id: string,
  username: string,
  avatar: string,
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
  error?: string,
};

type Props = {
  userInfo: UserData,
  id: string,
};

type State = {
  mediaFiles: Array<{
    id: string,
    created_at: string,
    in_reply_to_id: ?string,
    in_reply_to_account_id: ?string,
    sensitive: boolean,
    spoiler_text: string,
    visibility: string,
    language: string,
    uri: string,
    content: string,
    url: string,
    reblogs_count: number,
    favourites_count: number,
    favourited: boolean,
    reblogged: boolean,
    muted: boolean,
    pinned: boolean,
    reblog: ?string,
    application: Object,
    account: Object,
    media_attachments: (?Object)[],
    mentions: (?Object)[],
    tags: (?Object)[],
    emojis: (?Object)[],
  }>,
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
