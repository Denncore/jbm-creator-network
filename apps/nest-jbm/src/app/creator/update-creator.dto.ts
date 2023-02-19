import {PartialType} from '@nestjs/mapped-types';
import {CreatorDto} from "./creator.dto";

export class UpdateCreatorDto extends PartialType(CreatorDto) {
}
