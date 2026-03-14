import {ApiProperty} from "@nestjs/swagger";
import {IsInt} from "class-validator";

export class CreateTaggedUserDto {
  @ApiProperty({example: 1})
  @IsInt()
  reviewId: number;

  @ApiProperty({example: 2})
  @IsInt()
  taggedUserId: number;
}
