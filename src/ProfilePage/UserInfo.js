import React from 'react';
import iconFollowers from './img/icon-followers.svg';
import iconPhotos from './img/icon-photos.svg';
// components
import List from './List';
import Follower from './Follower';
import Media from './Media';
import User from './User';

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

const mediaFiles = [
  {
    id: 1,
    src: 'photo-1.png',
    srcSet: 'photo-1-retina.png',
    name: 'photo-1',
  },
  {
    id: 2,
    src: 'photo-2.png',
    srcSet: 'photo-2-retina.png',
    name: 'photo-2',
  },
  {
    id: 3,
    src: 'photo-3.png',
    srcSet: 'photo-3-retina.png',
    name: 'photo-3',
  },
  {
    id: 4,
    src: 'photo-4.png',
    srcSet: 'photo-4-retina.png',
    name: 'photo-4',
  },
  {
    id: 5,
    src: 'photo-5.png',
    srcSet: 'photo-5-retina.png',
    name: 'photo-5',
  },
  {
    id: 6,
    src: 'photo-6.png',
    srcSet: 'photo-6-retina.png',
    name: 'photo-6',
  },
];

export default class UserInfo extends React.Component {
  state = {
    userInfo: {},
    error: null,
    isLoaded: false,
  };

  componentDidMount() {
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/1?access_token=${
        process.env.REACT_APP_ACCESS_TOKEN
      }`,
    )
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            userInfo: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        },
      );
  }

  render() {
    const { userInfo, error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <User
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
          title="6 Followers you know"
          to="/EveryInteract/followers_you_follow"
          icon={iconFollowers}
        >
          {followers.map(follower => (
            <Follower
              key={follower.id}
              src={`${process.env.PUBLIC_URL} /img/${follower.src}`}
              srcSet={`${process.env.PUBLIC_URL} /img/${follower.srcSet}} 2x`}
              fullName={follower.fullName}
              to={follower.to}
            />
          ))}
        </List>
        <List title="522 Photos and videos" to="/EveryInteract/media" icon={iconPhotos}>
          {mediaFiles.map(media => (
            <Media
              key={media.id}
              src={`${process.env.PUBLIC_URL} /img/${media.src}`}
              srcSet={`${process.env.PUBLIC_URL} /img${media.srcSet} 2x`}
              name={media.name}
            />
          ))}
        </List>
      </div>
    );
  }
}
