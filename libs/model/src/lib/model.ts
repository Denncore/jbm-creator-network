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
  subscriberCount: number;
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
