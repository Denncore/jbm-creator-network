import { YoutubeInfo } from '@jbm-creator-network/model';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class YoutubeApiService {
  /*
    curl \
  'https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername={username}&key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed
    https://developers.google.com/youtube/v3/docs/channels/list?    

  ]
    */
  constructor(private readonly httpService: HttpService) {}

  getYoutubeUserInfo(channelName: string): Observable<YoutubeInfo> {
    return this.getUserInfo(channelName);
  }

  private getUserInfo(userName: string): Observable<YoutubeInfo> {
    const url = `https://youtube.googleapis.com/youtube/v3/channels`;
    return this.httpService
      .get(url, {
        params: {
          part: 'statistics',
          forUsername: userName,
          key: environment.api.youtube.apiKey,
        },
      })
      .pipe(
        map(
          resp =>
            ({
              subscriberCount: resp.data.items[0].statistics.subscriberCount,
            } as YoutubeInfo)
        ),
        catchError(error => {
          Logger.error(
            `Can't receive user infos from endpoint: '${url}'`,
            'YoutubeApiService'
          );
          return of(error);
        })
      );
  }
}
