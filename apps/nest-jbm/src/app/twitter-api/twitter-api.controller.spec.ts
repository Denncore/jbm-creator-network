import { Test, TestingModule } from '@nestjs/testing';
import { TwitterApiController } from './twitter-api.controller';

describe('TwitterApiController', () => {
  let controller: TwitterApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwitterApiController],
    }).compile();

    controller = module.get<TwitterApiController>(TwitterApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
