import {Module} from "@nestjs/common";
import {TaggedUserService} from "./tagged-user.service";
import {TaggedUserController} from "./tagged-user.controller";
import {PrismaService} from "src/prisma/prisma.service";

@Module({
  controllers: [TaggedUserController],
  providers: [TaggedUserService, PrismaService]
})
export class TaggedUserModule {}
