import {ApiProperty} from "@nestjs/swagger";
import {IsInt, IsOptional, IsString, Min, Max} from "class-validator";

export class CreateReviewDto {
  @ApiProperty({example: 5})
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({example: "Great product", required: false})
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiProperty({example: 1})
  @IsInt()
  userId: number;

  @ApiProperty({example: 2})
  @IsInt()
  productId: number;
}
