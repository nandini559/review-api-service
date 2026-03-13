import {Controller, Get, Post, Body} from "@nestjs/common";
import {ProductService} from "./product.service";

@Controller("products")
export class ProductController {
  constructor(private productService : ProductService) {}

  // Create Product
  @Post()
  createProduct(@Body()body : any) {
    return this.productService.create(body);
  }

  // Get All Products
  @Get()
  getProducts() {
    return this.productService.findAll();
  }
}
