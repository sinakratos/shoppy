import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsersRequest } from './dto/create-user.request';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() req: CreateUsersRequest) {
    return this.usersService.createUser(req);
  }
}
