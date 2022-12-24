import { Module } from '@nestjs/common';

import { TwitchApiController } from './twitch-api/twitch-api.controller';
import { HttpModule } from '@nestjs/axios';
import { TwitchApiService } from './twitch-api/twitch-api.service';
import { TwitterApiController } from './twitter-api/twitter-api.controller';
import { TwitterApiService } from './twitter-api/twitter-api.service';
import { YoutubeApiController } from './youtube-api/youtube-api.controller';
import { YoutubeApiService } from './youtube-api/youtube-api.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { environment } from '../environments/environment';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';
import { CaptchaService } from './contact/captcha/captcha.service';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    HttpModule,
    MailerModule.forRoot({
      transport: {
        host: environment.smtp.url,
        auth: {
          user: environment.smtp.username,
          pass: environment.smtp.password,
        },
        template: {
          dir: join(__dirname, '..', 'mails'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      },
    }),
  ],
  controllers: [
    TwitchApiController,
    TwitterApiController,
    YoutubeApiController,
    ContactController,
  ],
  providers: [
    TwitchApiService,
    TwitterApiService,
    YoutubeApiService,
    ContactService,
    CaptchaService,
  ],
})
export class AppModule {}
