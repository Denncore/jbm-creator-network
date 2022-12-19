import { Injectable } from '@angular/core';
import { Social, SocialCount } from '@jbm-creator-network/ui';
import { Observable, of } from 'rxjs';
import { CreatorsEntity } from './+state/creators/creators.models';

const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const entities: CreatorsEntity[] = [
  {
    id: '@hatschyuh',
    name: 'HatschYuh',
    twitch: 'hatschyuh',
    twitter: 'HatschYuh',
    instagram: 'HatschYuh',
  },
  {
    id: '@justedris',
    name: 'JustEdris',
    twitch: 'justedris',
    twitter: 'JustEdris',
    youtube: 'TDNZockt',
  },
  {
    id: '@truedoky',
    name: 'TrueDoky',
    twitch: 'truedoky',
    twitter: 'xDoky',
    youtube: '@doky4928',
    instagram: 'maxi.doky',
    tiktok: '@maxi.doky?',
  },
  {
    id: '@liz_kato',
    name: 'LizKato',
    twitch: 'liz_kato',
    twitter: 'LizKatoArt',
    instagram: 'liz_kato_art',
    tiktok: '@lizkatodesign',
  },
  {
    id: '@lapotor',
    name: 'Lapotor',
    twitch: 'lapotor',
  },
  {
    id: '@mimimaid',
    name: 'MimiMaid',
    twitch: 'mimimaid',
    twitter: 'MimiMaid',
    youtube: '@MirkaChan',
    instagram: 'mimi.maid',
    tiktok: '@mimimaid',
  },
  {
    id: '@fuki',
    name: 'Fuki',
    twitch: 'fuki',
    twitter: 'FukiLive',
    tiktok: '@fukilive',
  },
  {
    id: '@schokoevi',
    name: 'SchokoEvi',
    twitch: 'schokoevi',
    twitter: 'SchokoEvi',
    instagram: 'evelyn.nfld',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
  getCreators(): Observable<CreatorsEntity[]> {
    return of(this.extendWithSocialCounts(entities));
  }

  private extendWithSocialCounts(creators: CreatorsEntity[]): CreatorsEntity[] {
    return creators.map(entity => ({
      ...entity,
      socialCounts: this.mockSocials(),
    }));
  }

  private mockSocials(): SocialCount[] {
    return [
      randomIntFromInterval(0, 10) < 7 ? { social: Social.TWITCH, count: randomIntFromInterval(1, 999999) }: undefined,
      randomIntFromInterval(0, 10) < 7 ? { social: Social.TIKTOK, count: randomIntFromInterval(1, 9) }: undefined,
      randomIntFromInterval(0, 10) < 7 ? { social: Social.FACEBOOK, count: randomIntFromInterval(10000, 50000) }: undefined,
      randomIntFromInterval(0, 10) < 7 ? { social: Social.INSTAGRAM, count: randomIntFromInterval(200, 1000) }: undefined,
      randomIntFromInterval(0, 10) < 7 ? { social: Social.TWITTER, count: randomIntFromInterval(20002, 30002) }: undefined,
      randomIntFromInterval(0, 10) < 7 ? {
        social: Social.YOUTUBE,
        count: randomIntFromInterval(1000000, 2000000),
      }: undefined,
    ].filter(count => !!count) as SocialCount[];
  }
}
