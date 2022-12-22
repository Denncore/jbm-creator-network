import { Module } from '@nestjs/common';

import { TwitchApiController } from './twitch-api/twitch-api.controller';
import { HttpModule } from '@nestjs/axios';
import { TwitchApiService } from './twitch-api/twitch-api.service';
import { TwitterApiController } from './twitter-api/twitter-api.controller';
import { TwitterApiService } from './twitter-api/twitter-api.service';

@Module({
  imports: [HttpModule],
  controllers: [TwitchApiController, TwitterApiController],
  providers: [TwitchApiService, TwitterApiService],
})
export class AppModule {}
