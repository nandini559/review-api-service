import {Injectable, NotFoundException} from "@nestjs/common";
import {PrismaService} from "src/prisma/prisma.service";
import {CreateTaggedUserDto} from "./dto/create-tagged-user.dto";
import {UpdateTaggedUserDto} from "./dto/update-tagged-user.dto";

@Injectable()
export class TaggedUserService {
  constructor(private prisma : PrismaService) {}

  // CREATE
  create(data : CreateTaggedUserDto) {
    return this.prisma.taggedUser.create({data});
  }

  // GET ALL
  findAll() {
    return this.prisma.taggedUser.findMany({
      include: {
        review: true,
        user: true
      }
    });
  }

  // GET ONE
  async findOne(id : number) {
    const taggedUser = await this.prisma.taggedUser.findUnique({
      where: {
        id
      },
      include: {
        review: true,
        user: true
      }
    });

    if (!taggedUser) {
      throw new NotFoundException("Tagged user not found");
    }

    return taggedUser;
  }

  // UPDATE
  async update(id : number, data : UpdateTaggedUserDto) {
    const taggedUser = await this.prisma.taggedUser.findUnique({where: {
        id
      }});

    if (!taggedUser) {
      throw new NotFoundException("Tagged user not found");
    }

    return this.prisma.taggedUser.update({where: {
        id
      }, data});
  }

  // DELETE
  async remove(id : number) {
    const taggedUser = await this.prisma.taggedUser.findUnique({where: {
        id
      }});

    if (!taggedUser) {
      throw new NotFoundException("Tagged user not found");
    }

    return this.prisma.taggedUser.delete({where: {
        id
      }});
  }
}
