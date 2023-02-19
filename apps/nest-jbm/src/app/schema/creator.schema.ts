import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {CreatorsEntity, SocialCount} from "@jbm-creator-network/model";

@Schema()
export class Creator implements CreatorsEntity {
  @Prop()
  id: string;
  @Prop()
  description: string;
  @Prop()
  email: string;
  @Prop()
  facebook: string;
  @Prop()
  img: string;
  @Prop()
  instagram: string;
  @Prop()
  instagramId: string;
  @Prop()
  name: string;
  @Prop()
  socialCounts: SocialCount[];
  @Prop()
  tiktok: string;
  @Prop()
  twitch: string;
  @Prop()
  twitter: string;
  @Prop()
  youtube: string;
}

export const CreatorSchema = SchemaFactory.createForClass(Creator);
