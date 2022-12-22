import { YoutubeInfo } from '@jbm-creator-network/model';
import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { YoutubeApiService } from './youtube-api.service';

@Controller('youtube-api')
export class YoutubeApiController {
  constructor(private readonly youtubeApiService: YoutubeApiService) {}

  @Get('/userInfo')
  getChannelData(@Query('userName') userName: string): Observable<YoutubeInfo> {
    return this.youtubeApiService.getYoutubeUserInfo(userName);
  }
}
