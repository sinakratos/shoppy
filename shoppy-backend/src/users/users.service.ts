import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUsersRequest } from './dto/create-user.request';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'generated/prisma/browser';
import * as bcrypt from 'bcrypt';
import { Prisma } from 'generated/prisma/client';
@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: CreateUsersRequest) {
    try {
      return await this.prismaService.user.create({
        data: {
          ...data,
          password: await bcrypt.hash(data.password, 10),
        },
        select: { id: true, email: true },
      });
    } catch (err: any) {
      if (err.code === 'P2002') {
        throw new UnprocessableEntityException(
          'User with this email already exists',
        );
      }
      throw err;
    }
  }

  async getUser(filter: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUniqueOrThrow({
      where: filter,
    });
  }
}
