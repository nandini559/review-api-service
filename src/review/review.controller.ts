import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete
} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {ReviewService} from "./review.service";
import {CreateReviewDto} from "./dto/create-review.dto";
import {UpdateReviewDto} from "./dto/update-review.dto";

@ApiTags("Reviews")
@Controller("reviews")
export class ReviewController {
  constructor(private readonly reviewService : ReviewService) {}

  @Post()
  create(@Body()data : CreateReviewDto) {
    return this.reviewService.create(data);
  }

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(":id")
  findOne(@Param("id")id : string) {
    return this.reviewService.findOne(Number(id));
  }

  @Put(":id")
  update(@Param("id")id : string, @Body()data : UpdateReviewDto) {
    return this.reviewService.update(Number(id), data);
  }

  @Delete(":id")
  remove(@Param("id")id : string) {
    return this.reviewService.remove(Number(id));
  }
}
