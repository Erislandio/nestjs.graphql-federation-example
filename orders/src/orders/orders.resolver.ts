import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { User } from './entities/user.entity';
import { Product } from './entities/product.entity';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => [Order], { name: 'orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @ResolveField(() => User)
  user(@Parent() order: Order): any {
    return { __typename: 'User', id: order.userId };
  }

  @ResolveField(() => [Product])
  products(@Parent() order: Order): any[] {
    return order.productIds.map(id => ({ __typename: 'Product', id }));
  }
}
