import { Test, TestingModule } from '@nestjs/testing';
import { InstagramApiController } from './instagram-api.controller';

describe('InstagramApiController', () => {
  let controller: InstagramApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstagramApiController],
    }).compile();

    controller = module.get<InstagramApiController>(InstagramApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
