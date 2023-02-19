import {Injectable, Logger} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {environment} from "../../environments/environment";
import {map, Observable, take} from "rxjs";
import {Social, TiktokInfo} from "@jbm-creator-network/model";
import {CreatorService} from "../creator/creator.service";
import {CreatorDocument} from "../creator/creator.document";

@Injectable()
export class TiktokApiService {
  private static readonly BASE_URL = `https://${environment.api.tiktok.rapidApiHost}/api`;
  private currentRequestCount = 0;
  private readonly logger = new Logger(TiktokApiService.name);

  constructor(private readonly httpService: HttpService, private readonly creatorService: CreatorService) {
  }

  async updateCreatorWithTikTokInfos(): Promise<void> {
    return this.creatorService.findCreator({tiktok: {$exists: true}}).then(async creators => {
      for (const creator of creators) {
        await this.delay(10000);
        this.logger.log(`Get TikTok Infos from: ${creator.tiktok}`);

        this.getTikTokInfo(creator.tiktok).pipe(take(1))
          .subscribe(this.saveCreatorWithNewTikTokInfos(creator))
      }
    })
  }

  private async delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  private saveCreatorWithNewTikTokInfos(creator: CreatorDocument) {
    return tiktokInfos => {
      let existingSocialCount = creator.socialCounts.find((socialCount) => socialCount.social === Social.TIKTOK);
      if (!existingSocialCount) {
        creator.socialCounts.push({
          social: Social.TIKTOK,
          count: tiktokInfos.followerCount,
          link: `https://www.tiktok.com/@${creator.tiktok}`
        })
      } else {
        existingSocialCount.count = tiktokInfos.followerCount
      }
      this.creatorService.updateCreator(creator._id, creator);
    };
  }

  private getTikTokInfo(userName: string): Observable<TiktokInfo> {
    this.currentRequestCount++;
    const headers = {
      'content-type': 'application/json',
      'X-RapidAPI-Key': environment.api.tiktok.rapidApiKey,
      'X-RapidAPI-Host': environment.api.tiktok.rapidApiHost
    }
    const data = {
      'username': userName,
      'amount_of_posts': 0
    }
    return this.httpService.post(`${TiktokApiService.BASE_URL}/search`, data, {headers})
      .pipe(
        map(resp => resp.data?.user),
        map((stats: { followers: number }) => {
          const tiktokInfo = {userName: userName, followerCount: stats.followers};
          this.logger.log(`Extracted TikTok INFO from: ${userName}: ${JSON.stringify(tiktokInfo)}`)
          return tiktokInfo
        })
      );
  }
}
