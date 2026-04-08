import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { OrdersLoader } from './orders.loader';

@Module({
  providers: [OrdersResolver, UsersResolver, OrdersService, PrismaService, OrdersLoader],
})
export class OrdersModule {}
