import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [OrdersResolver, UsersResolver, OrdersService],
})
export class OrdersModule {}
