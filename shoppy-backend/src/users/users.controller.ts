import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CreateUsersRequest } from './dto/create-user.request';
import { UsersService } from './users.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(NoFilesInterceptor())
  @Post()
  createUser(@Body() req: CreateUsersRequest) {
    return this.usersService.createUser(req);
  }
}
