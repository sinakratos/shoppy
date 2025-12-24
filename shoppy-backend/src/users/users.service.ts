import { Injectable } from '@nestjs/common';
import { CreateUsersRequest } from './dto/create-user.request';

@Injectable()
export class UsersService {
  createUser(data: CreateUsersRequest) {
    // Logic to create a user
  }
}
