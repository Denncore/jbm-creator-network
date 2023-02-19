import {Injectable, Logger} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {environment} from "../../environments/environment";
import {interval, map, Observable, of, take} from "rxjs";
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

  updateCreatorWithInstagramInfos(): void {
    this.creatorService.findCreator({instagramId: {$exists: true}}).then(creators => {
      creators.forEach(creator => {
        setTimeout(() => {
          this.logger.log(`Get Instagram Infos from: ${creator.instagram}`);
          this.getInstagramInfo(creator.instagram, creator.instagramId).pipe(take(1))
            .subscribe(this.saveCreatorWithNewInstagramInfos(creator))
        }, 1000)

      })
    })
  }

  private saveCreatorWithNewInstagramInfos(creator: CreatorDocument) {
    return instagramInfos => {
      let existingSocialCount = creator.socialCounts.find((socialCount) => socialCount.social);
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
    this.logger.log(`${InstagramApiService.BASE_URL}/user/${userId}/info`)
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

  private rateLimitIsExceeded() {
    return () => {
      let delayObservable$;
      if (this.currentRequestCount === environment.api.instagram.requestRateLimitPerMinute) {
        delayObservable$ = interval(60000);
      } else {
        delayObservable$ = of(undefined);
      }
      this.currentRequestCount = 0;
      return delayObservable$;
    };
  }
}
