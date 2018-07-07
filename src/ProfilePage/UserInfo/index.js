import React from 'react';
// components
import List from './List';
import Follower from './Follower';
import Media from './Media';
import User from './User';
// ims
import iconFollowers from './img/icon-followers.svg';
import iconPhotos from './img/icon-photos.svg';

const followers = [
  {
    id: 1,
    src: 'follower-1.png',
    srcSet: 'follower-1-retina.png',
    fullName: 'Oleg',
    to: 'salahov30',
  },
  {
    id: 2,
    src: 'follower-2.png',
    srcSet: 'follower-2-retina.png',
    fullName: 'Сергей Черкашин',
    to: 'VonderVuflya',
  },
  {
    id: 3,
    src: 'follower-3.png',
    srcSet: 'follower-3-retina.png',
    fullName: 'Caroline Ward',
    to: 'noveltyshoe',
  },
  {
    id: 4,
    src: 'follower-4.png',
    srcSet: 'follower-4-retina.png',
    fullName: 'Aya Ulan',
    to: 'aya_ulan',
  },
  {
    id: 5,
    src: 'follower-5.png',
    srcSet: 'follower-5-retina.png',
    fullName: 'CM/UX',
    to: 'lighthorsechris',
  },
  {
    id: 6,
    src: 'follower-6.png',
    srcSet: 'follower-6-retina.png',
    fullName: 'Pinky Bazaz',
    to: 'PinkyBazaz',
  },
];

export default class UserInfo extends React.Component {
  state = {
    mediaFiles: [],
  };

  componentDidMount() {
    const host = 'https://twitter-demo.erodionov.ru';
    const accesToken = process.env.REACT_APP_ACCESS_TOKEN;
    const id = 1;

    fetch(`${host}/api/v1/accounts/${id}/statuses?only_media=yes&access_token=${accesToken}`)
      .then(response => response.json())
      .then((mediaFiles) => {
        this.setState({ mediaFiles });
      });
  }

  render() {
    const { mediaFiles } = this.state;
    const { userInfo } = this.props;
    const countMediaFiles = mediaFiles.length;

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
              src={`${process.env.PUBLIC_URL} /img/${follower.src}`}
              srcSet={`${process.env.PUBLIC_URL} /img/${follower.srcSet} 2x`}
              fullName={follower.fullName}
              to={follower.to}
            />
          ))}
        </List>
        <List
          title={`${countMediaFiles} Photos and videos`}
          to={`/${userInfo.id}/media`}
          icon={iconPhotos}
        >
          {mediaFiles.map(media => <Media key={media.id} pictureProps={media.media_attachments} />)}
        </List>
      </div>
    );
  }
}
