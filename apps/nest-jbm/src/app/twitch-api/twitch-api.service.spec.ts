import { TwitchInfo } from '@jbm-creator-network/model';
import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { Observable, of } from 'rxjs';
import { TwitchApiService } from './twitch-api.service';

describe('TwitchApiService', () => {
  let service: TwitchApiService;
  let httpService: HttpService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TwitchApiService,
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
    service = module.get<TwitchApiService>(TwitchApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Receive Twitch user infos', () => {
    it('should receive the infos correctly', async () => {
      jest.spyOn(httpService, 'get').mockImplementation(url => {
        if (url.endsWith('/users')) {
          return of({
            data: { data: [{ id: '42', profile_image_url: '666' }] },
          }) as Observable<any>;
        } else if (url.endsWith('/users/follows')) {
          return of({ data: { total: 1337 } });
        }
        return of();
      });

      jest.spyOn(httpService, 'post').mockImplementation(() => {
        return of({
          data: {
            access_token: '123541 11515251',
            expires_in: '123451',
            token_type: 'Bearer',
          },
        }) as Observable<any>;
      });

      service
        .getTwitchUserInfo('denncore_')
        .subscribe((twitchInfo: TwitchInfo) => {
          expect(twitchInfo.followerCount).toBe(1337);
          expect(twitchInfo.profile_image_url).toBe('666');

          expect(httpService.post).toHaveBeenCalledTimes(1);
          expect(httpService.get).toHaveBeenCalledTimes(2);
        });
    });
  });
});
