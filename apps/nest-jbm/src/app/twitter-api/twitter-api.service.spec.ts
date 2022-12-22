import { TwitterInfo } from '@jbm-creator-network/model';
import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { TwitterApiService } from './twitter-api.service';

describe('TwitterApiService', () => {
  let service: TwitterApiService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TwitterApiService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
            post: jest.fn(),
          },
        },
      ],
    }).compile();

    httpService = module.get<HttpService>(HttpService);
    service = module.get<TwitterApiService>(TwitterApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Receive Twitch user infos', () => {
    it('should receive the infos correctly', async () => {
      jest.spyOn(httpService, 'get').mockImplementation((url, config) => {
        if (url.endsWith('/users/by?usernames=denncore_')) {
          expect(config).toEqual({
            headers: {
              Authorization: `Bearer ${environment.api.twitter.bearerToken}`,
            },
            params: {
              'user.fields': 'public_metrics',
            },
          });

          return of({
            data: { data: [{ public_metrics: { followers_count: 1337 } }] },
          }) as Observable<any>;
        }
        return of();
      });

      service
        .getTwitterUserInfo('denncore_')
        .subscribe((twitterInfo: TwitterInfo) => {
          expect(twitterInfo.followerCount).toBe(1337);

          expect(httpService.get).toHaveBeenCalledTimes(1);
        });
    });
  });
});
