import {Document} from "mongoose";
import {SocialCount} from "@jbm-creator-network/model";

export interface CreatorDocument extends Document {
  readonly id: string;
  readonly name: string;
  readonly twitch: string;
  readonly email: string;
  readonly img: string;
  readonly description: string;
  readonly instagram: string;
  readonly instagramId: string;
  readonly twitter: string;
  readonly tiktok: string;
  readonly youtube: string;
  readonly facebook: string;
  readonly socialCounts: SocialCount[];
}
