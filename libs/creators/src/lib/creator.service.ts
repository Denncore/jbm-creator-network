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
    email: 'hatschyuh@jbm.contact',
    twitch: 'hatschyuh',
    twitter: 'HatschYuh',
    instagram: 'HatschYuh',
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
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@truedoky',
    name: 'TrueDoky',
    email: 'truedoky@jbm.contact',
    twitch: 'truedoky',
    twitter: 'xDoky',
    youtube: '@doky4928',
    instagram: 'maxi.doky',
    tiktok: '@maxi.doky?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@liz_kato',
    name: 'LizKato',
    email: 'liz_kato@jbm.contact',
    twitch: 'liz_kato',
    twitter: 'LizKatoArt',
    instagram: 'liz_kato_art',
    tiktok: '@lizkatodesign',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@lapotor',
    name: 'Lapotor',
    email: 'info@jbm.contact',
    twitch: 'lapotor',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    id: '@mimimaid',
    name: 'MimiMaid',
    email: 'mimimaid@jbm.contact',
    twitch: 'mimimaid',
    twitter: 'MimiMaid',
    youtube: '@MirkaChan',
    instagram: 'mimi.maid',
    tiktok: '@mimimaid',
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
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
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
      randomIntFromInterval(0, 10) < 7
        ? { social: Social.TWITCH, count: randomIntFromInterval(1, 999999) }
        : undefined,
      randomIntFromInterval(0, 10) < 7
        ? { social: Social.TIKTOK, count: randomIntFromInterval(1, 9) }
        : undefined,
      randomIntFromInterval(0, 10) < 7
        ? {
            social: Social.FACEBOOK,
            count: randomIntFromInterval(10000, 50000),
          }
        : undefined,
      randomIntFromInterval(0, 10) < 7
        ? { social: Social.INSTAGRAM, count: randomIntFromInterval(200, 1000) }
        : undefined,
      randomIntFromInterval(0, 10) < 7
        ? { social: Social.TWITTER, count: randomIntFromInterval(20002, 30002) }
        : undefined,
      randomIntFromInterval(0, 10) < 7
        ? {
            social: Social.YOUTUBE,
            count: randomIntFromInterval(1000000, 2000000),
          }
        : undefined,
    ].filter(count => !!count) as SocialCount[];
  }
}
