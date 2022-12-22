import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Environment, ENVIRONMENT } from '@jbm-creator-network/environment';
import { TwitterInfo } from '@jbm-creator-network/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  constructor(
    @Inject(ENVIRONMENT) public env: Environment,
    private httpClient: HttpClient
  ) {}

  getChannelInfo(userName: string): Observable<TwitterInfo> {
    return this.httpClient.get<TwitterInfo>(
      `${this.env.baseUrlApi}/twitter-api/userInfo`,
      {
        params: { userName },
      }
    );
  }
}
