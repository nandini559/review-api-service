import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete
} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller("users")
export class UserController {
  constructor(private userService : UserService) {}

  // CREATE USER
  @Post()
  createUser(@Body()body : CreateUserDto) {
    return this.userService.create(body);
  }

  // GET ALL USERS
  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  // GET USER BY ID
  @Get(":id")
  getUser(@Param("id")id : string) {
    return this.userService.findOne(Number(id));
  }

  // UPDATE USER
  @Put(":id")
  updateUser(@Param("id")id : string, @Body()body : UpdateUserDto) {
    return this.userService.update(Number(id), body);
  }

  // DELETE USER
  @Delete(":id")
  deleteUser(@Param("id")id : string) {
    return this.userService.remove(Number(id));
  }
}
