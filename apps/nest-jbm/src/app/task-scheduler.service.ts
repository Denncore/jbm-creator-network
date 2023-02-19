import {Injectable, Logger} from "@nestjs/common";
import {Cron, CronExpression} from "@nestjs/schedule";
import {InstagramApiService} from "./instagram-api/instagram-api.service";

@Injectable()
export class TaskSchedulerService {
  private readonly logger = new Logger(TaskSchedulerService.name);

  constructor(private readonly instagramApiService: InstagramApiService) {
  }


  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  // @Cron("5 * * * * *")
  retrieveApiInfos() {
    this.logger.log('Started all API Sync');
    this.logger.log('Started Instagram API Sync');
    this.instagramApiService.updateCreatorWithInstagramInfos();
    this.logger.log('Finished Instagram API Sync');
    this.logger.log('Finished all API Sync');
  }
}
