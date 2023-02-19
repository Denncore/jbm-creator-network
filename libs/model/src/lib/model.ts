export interface TwitchInfo {
  followerCount: number;
  profile_image_url: string;
}
export interface TwitterInfo {
  followerCount: number;
}
export interface InstagramInfo {
  followerCount: number;
}
export interface FacebookInfo {
  followerCount: number;
}
export interface TiktokInfo {
  followerCount: number;
}
export interface YoutubeInfo {
  subscriberCount: number;
}
export interface ContactEmail {
  name: string;
  eMail: string;
  creatorName: string;
  message: string;
  creatorDirectContact: boolean;
  captcha: string;
}

export interface ContactEmailResponse {
  successful: boolean;
}

export enum Social {
  TWITCH = 'twitch',
  TIKTOK = 'tiktok',
  YOUTUBE = 'youtube',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
}

export interface SocialCount {
  social: Social;
  count: number;
  link: string;
}

/**
 * Interface for the 'Creators' data
 */
export interface CreatorsEntity {
  id: string;
  name: string;
  twitch: string;
  email: string;
  img?: string;
  description?: string;
  instagram?: string;
  instagramId?: string;
  twitter?: string;
  tiktok?: string;
  youtube?: string;
  facebook?: string;
  socialCounts: SocialCount[];
}
