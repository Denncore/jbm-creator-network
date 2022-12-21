import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { TwitchInfo } from '@jbm-creator-network/model';

interface TwitchToken {
  access_token: string;
  expires_in: string;
  token_type: string;
}
interface TwitchUser {
  id: string;
  profile_image_url: string;
}

@Injectable()
export class TwitchApiService {
  private static readonly AUTH_BASE_URL = 'https://id.twitch.tv';
  private static readonly API_BASE_URL = 'https://api.twitch.tv/helix';
  private cachedToken: TwitchToken;

  constructor(private readonly httpService: HttpService) {}

  getTwitchUserInfo(userLogin: string): Observable<TwitchInfo> {
    return this.getToken().pipe(
      switchMap(() => this.getUserInfo(userLogin)),
      switchMap((user: TwitchUser) => this.extendUserInfoWithFollower(user))
    );
  }

  private getUserInfo(userLogin: string): Observable<TwitchUser> {
    const url = `https://api.twitch.tv/helix/users`;
    return this.httpService
      .get(url, {
        headers: this.getAuthHeader(),
        params: {
          login: userLogin,
        },
      })
      .pipe(
        map(resp => resp.data.data[0] as TwitchUser),
        catchError(error => {
          Logger.error(
            `Can't receive user infos from endpoint: '${url}'`,
            'TwitchApiService'
          );
          return of(error);
        })
      );
  }

  private extendUserInfoWithFollower(user: TwitchUser): Observable<TwitchInfo> {
    const params = {
      to_id: user.id,
      first: '1',
    };

    const url = `${TwitchApiService.API_BASE_URL}/users/follows`;
    return this.httpService
      .get(url, {
        headers: this.getAuthHeader(),
        params,
      })
      .pipe(
        map(resp => {
          const twitchInfo: TwitchInfo = {
            followerCount: resp.data.total,
            profile_image_url: user.profile_image_url,
          };
          return twitchInfo;
        }),
        catchError(error => {
          Logger.error(
            `Can't receive follows from endpoint: '${url}'`,
            'TwitchApiService'
          );
          return of(error);
        })
      );
  }

  private getToken(): Observable<TwitchToken> {
    if (this.doesValidTokenAlreadyExist()) {
      return of(this.cachedToken as TwitchToken);
    }
    const body = {
      client_id: environment.api.twitch.clientId,
      client_secret: environment.api.twitch.secret,
      grant_type: 'client_credentials',
    };
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const url = `${TwitchApiService.AUTH_BASE_URL}/oauth2/token`;
    return this.httpService
      .post<TwitchToken>(url, body, {
        headers: headers,
      })
      .pipe(
        map(resp => {
          this.cachedToken = resp.data;
          return resp.data;
        }),
        catchError(error => {
          Logger.error(
            `Can't receive token from endpoint: '${url}'`,
            'TwitchApiService'
          );
          return of(error);
        })
      );
  }

  private getAuthHeader() {
    return {
      Authorization: `Bearer ${this.cachedToken.access_token}`,
      'Client-Id': `${environment.api.twitch.clientId}`,
    };
  }

  private doesValidTokenAlreadyExist(): boolean {
    return (
      !!this.cachedToken && new Date(this.cachedToken.expires_in) >= new Date()
    );
  }
}
