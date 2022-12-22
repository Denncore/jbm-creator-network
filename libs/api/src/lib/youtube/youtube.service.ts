import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Environment, ENVIRONMENT } from '@jbm-creator-network/environment';
import { YoutubeInfo } from '@jbm-creator-network/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(
    @Inject(ENVIRONMENT) public env: Environment,
    private httpClient: HttpClient
  ) {}

  getChannelInfo(userName: string): Observable<YoutubeInfo> {
    return this.httpClient.get<YoutubeInfo>(
      `${this.env.baseUrlApi}/youtube-api/userInfo`,
      {
        params: { userName },
      }
    );
  }
}
