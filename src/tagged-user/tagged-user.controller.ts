import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete
} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {TaggedUserService} from "./tagged-user.service";
import {CreateTaggedUserDto} from "./dto/create-tagged-user.dto";
import {UpdateTaggedUserDto} from "./dto/update-tagged-user.dto";

@ApiTags("Tagged Users")
@Controller("tagged-users")
export class TaggedUserController {
  constructor(private readonly taggedUserService : TaggedUserService) {}

  @Post()
  create(@Body()data : CreateTaggedUserDto) {
    return this.taggedUserService.create(data);
  }

  @Get()
  findAll() {
    return this.taggedUserService.findAll();
  }

  @Get(":id")
  findOne(@Param("id")id : string) {
    return this.taggedUserService.findOne(Number(id));
  }

  @Put(":id")
  update(@Param("id")id : string, @Body()data : UpdateTaggedUserDto) {
    return this.taggedUserService.update(Number(id), data);
  }

  @Delete(":id")
  remove(@Param("id")id : string) {
    return this.taggedUserService.remove(Number(id));
  }
}
