import {Injectable, Logger} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {environment} from "../../environments/environment";
import {map, Observable, take} from "rxjs";
import {InstagramInfo, Social} from "@jbm-creator-network/model";
import {CreatorService} from "../creator/creator.service";
import {CreatorDocument} from "../creator/creator.document";

@Injectable()
export class InstagramApiService {
  private static readonly BASE_URL = `https://${environment.api.instagram.rapidApiHost}/instagram`;
  private currentRequestCount = 0;
  private readonly logger = new Logger(InstagramApiService.name);

  constructor(private readonly httpService: HttpService, private readonly creatorService: CreatorService) {
  }

  async updateCreatorWithInstagramInfos(): Promise<void> {
    return this.creatorService.findCreator({instagramId: {$exists: true}}).then(async creators => {
      for (const creator of creators) {
        await this.delay(10000);
        this.logger.log(`Get Instagram Infos from: ${creator.instagram}`);
        this.getInstagramInfo(creator.instagram, creator.instagramId).pipe(take(1))
          .subscribe(this.saveCreatorWithNewInstagramInfos(creator))
      }
    })
  }

  private async delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


  private saveCreatorWithNewInstagramInfos(creator: CreatorDocument) {
    return instagramInfos => {
      let existingSocialCount = creator.socialCounts.find((socialCount) => socialCount.social === Social.INSTAGRAM);
      if (!existingSocialCount) {
        creator.socialCounts.push({
          social: Social.INSTAGRAM,
          count: instagramInfos.followerCount,
          link: `https://www.instagram.com/${creator.instagram}`
        })
      } else {
        existingSocialCount.count = instagramInfos.followerCount
      }
      this.creatorService.updateCreator(creator._id, creator);
    };
  }

  private getInstagramInfo(userName: string, userId: string): Observable<InstagramInfo> {
    this.currentRequestCount++;
    const headers = {
      'content-type': 'application/json',
      'X-RapidAPI-Key': environment.api.instagram.rapidApiKey,
      'X-RapidAPI-Host': environment.api.instagram.rapidApiHost
    }
    return this.httpService.post(`${InstagramApiService.BASE_URL}/user/get_info_by_id`, {id: userId}, {headers})
      .pipe(
        map(resp => resp.data?.response?.body?.user),
        map((user: { follower_count: number }) => {
          const instagramInfo = {userName: userName, followerCount: user.follower_count};
          this.logger.log(`Extracted Instagram INFO from: ${userName}: ${JSON.stringify(instagramInfo)}`)
          return instagramInfo
        })
      );
  }
}
