import {Controller, Get, Post, Body} from "@nestjs/common";
import {ReviewService} from "./review.service";

@Controller("reviews")
export class ReviewController {
  constructor(private reviewService : ReviewService) {}

  // Create Review
  @Post()
  createReview(@Body()body : any) {
    return this.reviewService.create(body);
  }

  // Get All Reviews
  @Get()
  getReviews() {
    return this.reviewService.findAll();
  }
}
