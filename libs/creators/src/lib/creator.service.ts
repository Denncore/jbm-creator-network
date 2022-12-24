import { Injectable } from '@angular/core';
import {
  TwitchService,
  TwitterService,
  YoutubeService,
} from '@jbm-creator-network/api';
import { Social } from '@jbm-creator-network/ui';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { CreatorsEntity } from './+state/creators/creators.models';

const entities: CreatorsEntity[] = [
  {
    id: '@hatschyuh',
    name: 'HatschYuh',
    email: 'hatschyuh@jbm.contact',
    twitch: 'hatschyuh',
    twitter: 'HatschYuh',
    instagram: 'HatschYuh',
    socialCounts: [],
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@justedris',
    name: 'JustEdris',
    email: 'justedris@jbm.contact',
    twitch: 'justedris',
    twitter: 'JustEdris',
    youtube: 'TDNZockt',
    socialCounts: [],
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@truedoky',
    name: 'TrueDoky',
    email: 'truedoky@jbm.contact',
    twitch: 'truedoky',
    twitter: 'xDoky',
    instagram: 'maxi.doky',
    tiktok: '@maxi.doky?',
    socialCounts: [],
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@liz_kato',
    name: 'LizKato',
    email: 'liz_kato@jbm.contact',
    twitch: 'liz_kato',
    instagram: 'liz_kato_art',
    tiktok: '@lizkatodesign',
    socialCounts: [],
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@lapotor',
    name: 'Lapotor',
    email: 'info@jbm.contact',
    twitch: 'lapotor',
    socialCounts: [],
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@mimimaid',
    name: 'MimiMaid',
    email: 'mimimaid@jbm.contact',
    twitch: 'mimimaid',
    twitter: 'MimiMaid',
    instagram: 'mimi.maid',
    tiktok: '@mimimaid',
    socialCounts: [],
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@fuki',
    name: 'Fuki',
    email: 'fuki@jbm.contact',
    twitch: 'fuki',
    twitter: 'FukiLive',
    tiktok: '@fukilive',
    socialCounts: [],
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@schokoevi',
    name: 'SchokoEvi',
    email: 'schokoevi@jbm.contact',
    twitch: 'schokoevi',
    twitter: 'SchokoEvi',
    instagram: 'evelyn.nfld',
    socialCounts: [],
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
  constructor(
    private twitchService: TwitchService,
    private twitterService: TwitterService,
    private youtubeService: YoutubeService
  ) {}

  getCreators(): Observable<CreatorsEntity[]> {
    return this.extendWithSocialCounts(entities);
  }

  private extendWithSocialCounts(
    creators: CreatorsEntity[]
  ): Observable<CreatorsEntity[]> {
    const requests: Observable<CreatorsEntity>[] = [];
    creators.forEach(creator => {
      requests.push(
        this.extendWithTwitchIfNecessary(creator).pipe(
          switchMap(creator => this.extendWithTwitterIfNecessary(creator)),
          switchMap(creator => this.extendWithYoutubeIfNecessary(creator))
        )
      );
    });
    return combineLatest(requests);
  }

  private extendWithTwitchIfNecessary(
    creator: CreatorsEntity
  ): Observable<CreatorsEntity> {
    if (creator.twitch) {
      return this.twitchService.getChannelInfo(creator.twitch).pipe(
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
        })
      );
    }
    return of(creator);
  }

  private extendWithTwitterIfNecessary(
    creator: CreatorsEntity
  ): Observable<CreatorsEntity> {
    if (creator.twitter) {
      return this.twitterService.getChannelInfo(creator.twitter).pipe(
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
        })
      );
    }
    return of(creator);
  }

  private extendWithYoutubeIfNecessary(
    creator: CreatorsEntity
  ): Observable<CreatorsEntity> {
    if (creator.youtube) {
      return this.youtubeService.getChannelInfo(creator.youtube).pipe(
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
        })
      );
    }
    return of(creator);
  }
}
