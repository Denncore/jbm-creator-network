import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitchApiController } from './twitch-api/twitch-api.controller';
import { HttpModule } from '@nestjs/axios';
import { TwitchApiService } from './twitch-api/twitch-api.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, TwitchApiController],
  providers: [AppService, TwitchApiService],
})
export class AppModule {}
