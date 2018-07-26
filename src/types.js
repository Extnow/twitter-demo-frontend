// @flow

export type UserData = {
  id: string,
  username: string,
  acct: string,
  display_name: string,
  locked: boolean,
  bot: ?boolean,
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
  fields: Array<?{
    name: ?string,
    value: ?string,
  }>,
  moved?: string,
  error?: string,
};

export type FollowersData = Array<UserData>;

export type MediaAttachments = Array<{
  id: string,
  type: string,
  url: string,
  preview_url: string,
  remote_url: ?string,
  text_url: ?string,
  meta: ?{
    original: {
      width: number,
      height: number,
      size: string,
      aspect: number,
    },
    small: {
      width: number,
      height: number,
      size: string,
      aspect: number,
    },
  },
  description: ?string,
}>;

export type TweetsData = Array<{
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
  url: ?string,
  reblogs_count: number,
  favourites_count: number,
  favourited: ?boolean,
  reblogged: ?boolean,
  muted: ?boolean,
  pinned: ?boolean,
  reblog: ?string,
  application: ?{
    name: string,
    website: ?string,
  },
  account: UserData,
  media_attachments: MediaAttachments,
  mentions: Array<?{
    url: string,
    username: string,
    acct: string,
    id: string,
  }>,
  tags: Array<?{
    name: string,
    url: string,
    history: ?string,
  }>,
  emojis: Array<?{
    shortcode: string,
    static_url: string,
    url: string,
  }>,
}>;
