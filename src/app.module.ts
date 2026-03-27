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
import {ProductModule} from "./product/product.module";
import {TaggedUserController} from "./tagged-user/tagged-user.controller";
import {TaggedUserService} from "./tagged-user/tagged-user.service";
import {UserModule} from "./user/user.module";

@Module({
  imports: [UserModule],
  controllers: [
    AppController, UserController, ProductController, ReviewController, TaggedUserController
  ],
  providers: [
    PrismaService,
    AppService,
    UserService,
    ProductService,
    ReviewService,
    TaggedUserService
  ]
})
export class AppModule {}
