import {Injectable} from "@nestjs/common";
import {PrismaService} from "src/prisma/prisma.service";

@Injectable()
export class ReviewService {
  constructor(private prisma : PrismaService) {}

  create(data : any) {
    return this.prisma.review.create({data});
  }

  findAll() {
    return this.prisma.review.findMany({
      include: {
        user: true,
        product: true
      }
    });
  }
}
