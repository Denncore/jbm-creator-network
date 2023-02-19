import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {FilterQuery, Model} from "mongoose";
import {CreatorDocument} from "./creator.document";
import {UpdateCreatorDto} from "./update-creator.dto";
import {CreatorSocialsService} from "./creator-socials.service";
import {CreatorsEntity} from "@jbm-creator-network/model";
import {Creator} from "../schema/creator.schema";

@Injectable()
export class CreatorService {
  constructor(@InjectModel('Creator') private creatorModel: Model<CreatorDocument>,
              private readonly creatorSocialsService: CreatorSocialsService) {
  }

  async updateCreator(creatorId: string, updateCreator: UpdateCreatorDto): Promise<CreatorDocument> {
    const existingCreator = await this.creatorModel.findByIdAndUpdate(creatorId,
      updateCreator, {new: true});

    if (!existingCreator) {
      throw new NotFoundException(`Creator update failed. #${creatorId} not found`);
    }
    return existingCreator;
  }

  async getAllCreator(): Promise<CreatorDocument[]> {
    const creatorModel = await this.creatorModel.find();
    if (!creatorModel) {
      throw new NotFoundException('No Creator data found!');
    }
    return creatorModel;
  }

  async findCreator(criteria: FilterQuery<CreatorDocument>): Promise<CreatorDocument[]> {
    const foundCreator = await this.creatorModel.find(criteria);
    if (!foundCreator) {
      throw new NotFoundException(`No Creator fo ${criteria} data found!`);
    }
    return foundCreator;
  }

  async getAllCreatorExtendedWithSocials(): Promise<CreatorsEntity[]> {
    const creators: CreatorDocument[] = await this.getAllCreator();
    return this.creatorSocialsService.extendWithSocialCounts(creators.map(creator => creator['_doc']));
  }
}
