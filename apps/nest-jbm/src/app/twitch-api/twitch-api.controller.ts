import { TwitchInfo } from '@jbm-creator-network/model';
import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TwitchApiService } from './twitch-api.service';

@Controller('twitch-api')
export class TwitchApiController {
  constructor(private readonly twitchApiService: TwitchApiService) {}

  @Get('/userInfo')
  getChannelData(
    @Query('userLogin') userLogin: string
  ): Observable<TwitchInfo> {
    return this.twitchApiService.getTwitchUserInfo(userLogin);
  }
}
