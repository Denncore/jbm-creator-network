import {Injectable, Logger} from "@nestjs/common";
import {Cron, CronExpression} from "@nestjs/schedule";
import {InstagramApiService} from "./instagram-api/instagram-api.service";
import {TiktokApiService} from "./tiktok-api/tiktok-api.service";

@Injectable()
export class TaskSchedulerService {
  private readonly logger = new Logger(TaskSchedulerService.name);

  constructor(private readonly instagramApiService: InstagramApiService,
              private readonly tiktokApiService: TiktokApiService) {
  }


  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async retrieveApiInfos() {
    this.logger.log('Started all API Sync');
    this.logger.log('Started Instagram API Sync');
    await this.instagramApiService.updateCreatorWithInstagramInfos();
    this.logger.log('Finished Instagram API Sync');

    this.logger.log('Started tiktok API Sync');
    await this.tiktokApiService.updateCreatorWithTikTokInfos();
    this.logger.log('Finished tiktok API Sync');
    this.logger.log('Finished all API Sync');
  }
}
