import {Controller, Get} from "@nestjs/common";
import {CreatorService} from "./creator.service";
import {CreatorsEntity} from "@jbm-creator-network/model";

@Controller('creator')
export class CreatorController {
  constructor(private readonly creatorService: CreatorService) {
  }

  @Get('/')
  getCreator(): Promise<CreatorsEntity[]> {
    return this.creatorService.getAllCreatorExtendedWithSocials()
  }
}
