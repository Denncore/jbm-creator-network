import { Module } from '@nestjs/common';

import { TwitchApiController } from './twitch-api/twitch-api.controller';
import { HttpModule } from '@nestjs/axios';
import { TwitchApiService } from './twitch-api/twitch-api.service';
import { TwitterApiController } from './twitter-api/twitter-api.controller';
import { TwitterApiService } from './twitter-api/twitter-api.service';
import { YoutubeApiController } from './youtube-api/youtube-api.controller';
import { YoutubeApiService } from './youtube-api/youtube-api.service';

@Module({
  imports: [HttpModule],
  controllers: [
    TwitchApiController,
    TwitterApiController,
    YoutubeApiController,
  ],
  providers: [TwitchApiService, TwitterApiService, YoutubeApiService],
})
export class AppModule {}
