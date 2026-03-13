import {Injectable, NotFoundException} from "@nestjs/common";
import {PrismaService} from "src/prisma/prisma.service";
import {UpdateProductDto} from "./dto/update-product.dto";
import {CreateProductDto} from "./dto/create-product.dto";

@Injectable()
export class ProductService {
  constructor(private prisma : PrismaService) {}

  // CREATE
  create(data : CreateProductDto) {
    console.log(data);
    return this.prisma.product.create({data});
  }

  // GET ALL
  findAll() {
    return this.prisma.product.findMany();
  }

  // GET ONE
  async findOne(id : number) {
    const product = await this.prisma.product.findUnique({where: {
        id
      }});

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }

  // UPDATE
  async update(id : number, data : UpdateProductDto) {
    const product = await this.prisma.product.findUnique({where: {
        id
      }});

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return this.prisma.product.update({where: {
        id
      }, data});
  }

  // DELETE
  async remove(id : number) {
    const product = await this.prisma.product.findUnique({where: {
        id
      }});

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return this.prisma.product.delete({where: {
        id
      }});
  }
}
