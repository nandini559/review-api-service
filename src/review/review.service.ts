import {Injectable, NotFoundException} from "@nestjs/common";
import {PrismaService} from "src/prisma/prisma.service";
import {CreateReviewDto} from "./dto/create-review.dto";
import {UpdateReviewDto} from "./dto/update-review.dto";

@Injectable()
export class ReviewService {
  constructor(private prisma : PrismaService) {}

  // CREATE
  create(data : CreateReviewDto) {
    return this.prisma.review.create({data});
  }

  // GET ALL
  findAll() {
    return this.prisma.review.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        product: {
          select: {
            id: true,
            title: true
          }
        },
        tags: true
      }
    });
  }

  // GET ONE
  async findOne(id : number) {
    const review = await this.prisma.review.findUnique({
      where: {
        id
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        product: {
          select: {
            id: true,
            title: true
          }
        },
        tags: true
      }
    });

    if (!review) {
      throw new NotFoundException("Review not found");
    }

    return review;
  }

  // UPDATE
  async update(id : number, data : UpdateReviewDto) {
    const review = await this.prisma.review.findUnique({where: {
        id
      }});

    if (!review) {
      throw new NotFoundException("Review not found");
    }

    return this.prisma.review.update({where: {
        id
      }, data});
  }

  // DELETE
  async remove(id : number) {
    const review = await this.prisma.review.findUnique({where: {
        id
      }});

    if (!review) {
      throw new NotFoundException("Review not found");
    }

    return this.prisma.review.delete({where: {
        id
      }});
  }
}
