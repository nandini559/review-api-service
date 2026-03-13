import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {UserController} from "./user/user.controller";
import {ProductController} from "./product/product.controller";
import {ReviewController} from "./review/review.controller";
import {UserService} from "./user/user.service";
import {ProductService} from "./product/product.service";
import {ReviewService} from "./review/review.service";
import {PrismaService} from "./prisma/prisma.service";

@Module({
  imports: [],
  controllers: [
    AppController, UserController, ProductController, ReviewController
  ],
  providers: [PrismaService, AppService, UserService, ProductService, ReviewService]
})
export class AppModule {}
