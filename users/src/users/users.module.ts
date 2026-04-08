import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { UsersLoader } from './users.loader';

@Module({
  providers: [UsersResolver, UsersService, PrismaService, UsersLoader],
  exports: [UsersService, UsersLoader],
})
export class UsersModule {}
