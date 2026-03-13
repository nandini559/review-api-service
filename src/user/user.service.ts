import {Injectable, NotFoundException, BadRequestException} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(private prisma : PrismaService) {}

  // CREATE
  async create(data : CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: data.username
      }
    });

    if (user) {
      throw new BadRequestException("Username already exists");
    }

    return this.prisma.user.create({data});
  }

  // GET ALL
  findAll() {
    return this.prisma.user.findMany();
  }

  // GET ONE
  async findOne(id : number) {
    const user = await this.prisma.user.findUnique({where: {
        id
      }});

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }

  // UPDATE
  async update(id : number, data : UpdateUserDto) {
    const user = await this.prisma.user.findUnique({where: {
        id
      }});

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return this.prisma.user.update({where: {
        id
      }, data});
  }

  // DELETE
  async remove(id : number) {
    const user = await this.prisma.user.findUnique({where: {
        id
      }});

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return this.prisma.user.delete({where: {
        id
      }});
  }
}
