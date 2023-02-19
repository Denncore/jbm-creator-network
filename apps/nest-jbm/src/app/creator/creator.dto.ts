import {CreatorsEntity, SocialCount} from "@jbm-creator-network/model";

export class CreatorDto implements CreatorsEntity {
  id: string;
  description: string;
  email: string;
  facebook: string;
  img: string;
  instagram: string;
  instagramId: string;
  name: string;
  socialCounts: SocialCount[];
  tiktok: string;
  twitch: string;
  twitter: string;
  youtube: string;

}
