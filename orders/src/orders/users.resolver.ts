import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @ResolveField(() => [Order])
  orders(@Parent() user: User): Promise<Order[]> {
    return this.ordersService.findByUser(user.id);
  }
}
