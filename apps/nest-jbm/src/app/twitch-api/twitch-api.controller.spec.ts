import { Test, TestingModule } from '@nestjs/testing';
import { TwitchApiController } from './twitch-api.controller';

describe('TwitchApiController', () => {
  let controller: TwitchApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwitchApiController],
    }).compile();

    controller = module.get<TwitchApiController>(TwitchApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
