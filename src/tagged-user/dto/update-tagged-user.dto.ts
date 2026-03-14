import {PartialType} from "@nestjs/swagger";
import {CreateTaggedUserDto} from "./create-tagged-user.dto";

export class UpdateTaggedUserDto extends PartialType(CreateTaggedUserDto) {}
