import {Module} from '@nestjs/common';
import {HttpModule} from '@nestjs/axios';
import {TwitchApiService} from './twitch-api/twitch-api.service';
import {TwitterApiService} from './twitter-api/twitter-api.service';
import {YoutubeApiService} from './youtube-api/youtube-api.service';
import {MailerModule} from '@nestjs-modules/mailer';
import {environment} from '../environments/environment';
import {ContactController} from './contact/contact.controller';
import {ContactService} from './contact/contact.service';
import {CaptchaService} from './contact/captcha/captcha.service';
import {join} from 'path';
import {HandlebarsAdapter} from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import {MongooseModule} from "@nestjs/mongoose";
import {CreatorSchema} from "./schema/creator.schema";
import {InstagramApiService} from "./instagram-api/instagram-api.service";
import {ScheduleModule} from "@nestjs/schedule";
import {CreatorService} from "./creator/creator.service";
import {CreatorController} from "./creator/creator.controller";
import {TaskSchedulerService} from "./task-scheduler.service";
import {CreatorSocialsService} from "./creator/creator-socials.service";
import {TiktokApiService} from "./tiktok-api/tiktok-api.service";

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
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(environment.mongo.connection, {dbName: environment.mongo.dbName}),
    MongooseModule.forFeature([{name: 'Creator', schema: CreatorSchema}])
  ],
  controllers: [
    ContactController,
    CreatorController
  ],
  providers: [
    TwitchApiService,
    TwitterApiService,
    YoutubeApiService,
    InstagramApiService,
    TiktokApiService,
    TaskSchedulerService,
    ContactService,
    CaptchaService,
    CreatorService,
    CreatorSocialsService
  ],
})
export class AppModule {}
