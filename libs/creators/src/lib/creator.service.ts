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
      'About me: Ich heiße Yuh und ich erstelle Zeugs von fragwürdiger Qualität. Die meiste Zeit gehts hier um kreatives Gedöns, aber manchmal gibts hier auch etwas Gaming.\n' +
      'Oftmals habe ich nicht wirklich eine Ahnung was ich tue and dafür möchte ich mich entschuldigen. x(\n' +
      'Meistens Doodlen, machmal 3D + VFX und seltener : Shader-Programme schreiben.\n' +
      '\n' +
      'Ich mag das Thema "Jahreszeiten" sehr gerne, daher wird viel von meinem Zeugs um Natur, Szenerien und ein wenig um dieses bezaubernde Gefühl während einer Jahreszeit handeln.\n' +
      '\n' +
      'Wenn ich zocke/game, dann spiele ich aktuell gerne Overwatch. Ebenso spiele ich gerne Community-Games wie Quiplash, Skribbl.io und so weiter.\n' +
      'Und natürlich Beat Saber.\n' +
      '\n' +
      'DeviantArt: https://www.deviantart.com/juh-juh\n'
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
      '',
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
      'About me: Olaaa, ich bin Doky aka. Maxi, Streamer und Entertainer aus Leidenschaft. Ich liebe zocken, Kaffee und gemütliche Gesprächsrunden, über Themen aller Art. Ich bin ein junger Gott in quasi jedem Spiel, vor allem in dem, das sich "Leben" nennt (hugh Kappa). Ich bin 26 Jahre alt, ca. 1,78 groß und esse gerne Kräuterbaguette!\n' +
      'Mein Content besteht hauptsächlich aus Just Chatting und verschiedenen Games, worauf wir eben gerade Lust haben. Dabei liegt mein Fokus auf der Interaktion mit meinen Zuschauern. Mein Kanal soll einen Ort bieten, an dem sich jeder willkommen fühlt, sich untereinander geholfen wird und man die eventuell doofe Realität für einen Moment vergessen kann.\n' +
      'Auf Twitch findet man meinen Hauptcontent, dort bin ich am aktivsten. Den Rest betreibe ich nebenbei, sofern ich Zeit dafür habe. Auf YouTube werde ich immer mal wieder ein paar Highlights aus den Stream hochladen und auf TikTok/Instagram gibt es Clips, die einen bespaßen können.\n' +
      'Links: https://truedoky.de/socials\n' +
      '(Twitch, YouTube, Instagram, TikTok, Twitter)',
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
      '',
  },
  {
    id: '@lapotor',
    name: 'Lapotor',
    email: 'info@jbm.contact',
    twitch: 'lapotor',
    socialCounts: [],
    description:
      '',
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
      'About me: Heeeey! Ich bin die Mimi und ich bin auch dabei! :D\n' +
      'Auf vielen Plattformen bin ich bekannt als die „MimiMaid“\n' +
      'Ich bin eine deutsche „Maid – vTuberin“ und mache hauptsächlich Content mit meinem virtuellen Avatar.\n' +
      'Habe nebenbei eine leicht sarkastische Ader und bin unglaublich direkt. Auf den ersten Blick kann ich deswegen sehr unfreundlich wirken.\n' +
      'Trotzdem bin ich überall mit ganzem Herzen dabei und versuche die Menschen um mich herum zum Lachen zu bringen!\n' +
      'Außerdem LIEBE ich das Singen!\n' +
      'Interessiert?\n' +
      'Dann besucht mich auf Twitter, Twitch oder YouTube!\n' +
      '\n' +
      'Links:\n' +
      'TikTok: https://www.tiktok.com/@mimimaid\n'
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
      'About me:\n' +
      'Moin! Ich bin Fuki und schon seit über 12 Jahren in diesem ominösen Internet unterwegs. Legenden behaupten, ich war einer der ersten Gaming YouTuber im deutschsprachigen Raum, aber mittlerweile bin ich eher im Livestream zu Hause!\n' +
      '\n' +
      'Dort gibt es - neben chilligen Gaming Streams - auch ne menge cooler Events: Meine eigene Gameshow, große XXL Streams (der längste ging über 200 Stunden), Community Events und das alles mit euch - der Community - im Fokus!\n' +
      '\n' +
      'Links:\n' +
      'TikTok: https://www.tiktok.com/@fukilive',
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
      '',
  },
  {
    id: '@lurnara',
    name: 'lurnara',
    email: 'lurnara@jbm.contact',
    twitch: 'lurnara',
    twitter: 'lurnaracaden',
    instagram: 'thewritersgarden',
    socialCounts: [],
    description:
      'About me: Ich bin Lurnara, bekannt von dem Account @thewritersgarden auf Instagram. Seit 3 Jahren teile ich dort mit nun knapp über 100.000 Followern meine Liebe zum Schreiben und Lesen, aber auch anderen kreativen Inhalten. Angefangen hat das Ganze, weil ich hilfreiche Tipps und unterhaltsame Beiträge über diese Themen geteilt habe. Mittlerweile poste ich viel über meine eigenen Erfahrungen und über Dinge, die ich anregend finde, oder ich auf meiner Reise als kreativer Creator und Writer gelernt habe.\n'
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
