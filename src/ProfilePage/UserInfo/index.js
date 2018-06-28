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

export default ({ username }) => (
  <div>
    <User
      src="/img/avatar-large.png"
      srcSet="/img/avatar-large-retina.png"
      userName={username}
      fullName="Every Interaction"
      isTicked="true"
      isFollowsYou="true"
      bio="UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing."
      location="London, UK"
      website="everyinteraction.com"
      joined="Joined May 2008"
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
