import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { OrdersLoader } from './orders.loader';
import { Order } from './entities/order.entity';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly ordersLoader: OrdersLoader,
  ) {}

  @ResolveField(() => [Order])
  orders(@Parent() user: User): Promise<Order[]> {
    return this.ordersLoader.batchOrdersByUser.load(user.id);
  }
}
