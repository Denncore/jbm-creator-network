import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Environment, ENVIRONMENT } from '@jbm-creator-network/environment';
import { TwitchInfo } from '@jbm-creator-network/model';
import { Observable } from 'rxjs';

interface TwitchToken {
  access_token: string;
  expires_in: string;
  token_type: string;
}

@Injectable({
  providedIn: 'root',
})
export class TwitchService {
  private cachedToken?: TwitchToken;

  constructor(
    @Inject(ENVIRONMENT) public env: Environment,
    private httpClient: HttpClient
  ) {}

  getChannelInfo(userLogin: string): Observable<TwitchInfo> {
    return this.httpClient.get<TwitchInfo>(`${this.env.baseUrlApi}/twitch-api/userInfo`, {
      params: { userLogin },
    });
  }
}
