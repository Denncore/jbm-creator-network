import {Injectable} from "@nestjs/common";
import {TwitchApiService} from "../twitch-api/twitch-api.service";
import {TwitterApiService} from "../twitter-api/twitter-api.service";
import {YoutubeApiService} from "../youtube-api/youtube-api.service";
import {firstValueFrom, map} from "rxjs";
import {CreatorsEntity, Social} from "@jbm-creator-network/model";

@Injectable()
export class CreatorSocialsService {
  constructor(private readonly twitchApiService: TwitchApiService,
              private readonly twitterApiService: TwitterApiService,
              private readonly youtubeApiService: YoutubeApiService) {
  }

  async extendWithSocialCounts(creators: CreatorsEntity[]): Promise<CreatorsEntity[]> {
    return await Promise.all(creators.map(async (creator) => {
      let mappedCreator = await this.extendWithTwitchIfNecessary(creator);
      mappedCreator = await this.extendWithTwitterIfNecessary(mappedCreator);
      mappedCreator = await this.extendWithYoutubeIfNecessary(mappedCreator);
      return mappedCreator;
    }))
  }

  private async extendWithTwitchIfNecessary(
    creator: CreatorsEntity
  ): Promise<CreatorsEntity> {
    if (creator.twitch) {
      return (await firstValueFrom(this.twitchApiService.getTwitchUserInfo(creator.twitch).pipe(
        map(twitchInfo => {
          const twitchCount = {
            count: twitchInfo.followerCount,
            social: Social.TWITCH,
            link: `https://twitch.tv/${creator.twitch}`,
          };

          return {
            ...creator,
            img: twitchInfo.profile_image_url,
            socialCounts: [...creator.socialCounts, twitchCount],
          };
        }))));
    }
    return creator;
  }

  private async extendWithTwitterIfNecessary(
    creator: CreatorsEntity
  ): Promise<CreatorsEntity> {
    if (creator.twitter) {
      return (await firstValueFrom(this.twitterApiService.getTwitterUserInfo(creator.twitter).pipe(
        map(twitterInfo => {
          const twitterCount = {
            count: twitterInfo.followerCount,
            social: Social.TWITTER,
            link: `https://twitter.com/${creator.twitter}`,
          };
          return {
            ...creator,
            socialCounts: [...creator.socialCounts, twitterCount],
          };
        }))));
    }
    return creator;
  }

  private async extendWithYoutubeIfNecessary(
    creator: CreatorsEntity
  ): Promise<CreatorsEntity> {
    if (creator.youtube) {
      return (await firstValueFrom(this.youtubeApiService.getYoutubeUserInfo(creator.youtube).pipe(
        map(youtubeInfo => {
          const twitterCount = {
            count: youtubeInfo.subscriberCount,
            social: Social.YOUTUBE,
            link: `https://youtube.com/user/${creator.youtube}`,
          };

          return {
            ...creator,
            socialCounts: [...creator.socialCounts, twitterCount],
          };
        }))));
    }
    return creator;
  }

}
