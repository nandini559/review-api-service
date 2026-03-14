import {IsNumber, IsString} from "class-validator";

export class UpdateProductDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;
}
