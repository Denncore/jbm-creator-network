import { TwitterInfo } from '@jbm-creator-network/model';
import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TwitterApiService } from './twitter-api.service';

@Controller('twitter-api')
export class TwitterApiController {
  constructor(private readonly twitterApiService: TwitterApiService) {}

  @Get('/userInfo')
  getChannelData(@Query('userName') userName: string): Observable<TwitterInfo> {
    return this.twitterApiService.getTwitterUserInfo(userName);
  }
}
