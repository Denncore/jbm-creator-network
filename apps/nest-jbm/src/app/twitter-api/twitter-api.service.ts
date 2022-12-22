import { TwitterInfo } from '@jbm-creator-network/model';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class TwitterApiService {
  private static readonly BASE_URL = 'https://api.twitter.com/2';

  constructor(private readonly httpService: HttpService) {}

  getTwitterUserInfo(userName: string): Observable<TwitterInfo> {
    return this.getUserInfo(userName);
  }
  /**
   * https://developer.twitter.com/en/docs/twitter-api/users/lookup/quick-start/user-lookup
   */
  private getUserInfo(userName: string): Observable<TwitterInfo> {
    const url = `${TwitterApiService.BASE_URL}/users/by?usernames=${userName}`;
    return this.httpService
      .get(url, {
        headers: this.getAuthHeader(),
        params: {
          'user.fields': 'public_metrics',
        },
      })
      .pipe(
        map(resp => ({followerCount: resp.data.data[0].public_metrics.followers_count} as TwitterInfo)),
        catchError(error => {
          Logger.error(
            `Can't receive user infos from endpoint: '${url}'`,
            'TwitterApiService'
          );
          return of(error);
        })
      );
  }
 
  private getAuthHeader() {
    return {
      Authorization: `Bearer ${environment.api.twitter.bearerToken}`,
    };
  }
}
