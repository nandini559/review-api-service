import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete
} from "@nestjs/common";
import {ProductService} from "./product.service";
import {CreateProductDto} from "./dto/create-product.dto";

@Controller("products")
export class ProductController {
  constructor(private readonly productService : ProductService) {}

  @Post()
  create(@Body()data : CreateProductDto) {
    return this.productService.create(data);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(":id")
  findOne(@Param("id")id : string) {
    return this.productService.findOne(Number(id));
  }

  @Put(":id")
  update(@Param("id")id : string, @Body()data : CreateProductDto) {
    return this.productService.update(Number(id), data);
  }

  @Delete(":id")
  remove(@Param("id")id : string) {
    return this.productService.remove(Number(id));
  }
}
