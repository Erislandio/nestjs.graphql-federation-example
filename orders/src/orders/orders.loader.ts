import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrdersLoader {
  constructor(private readonly ordersService: OrdersService) {}

  public readonly batchOrdersByUser = new DataLoader<string, Order[]>(
    async (userIds: readonly string[]) => {
      const orders = await this.ordersService.findByUserIds(userIds);
      
      // Group orders by userId
      const ordersMap = new Map<string, Order[]>();
      orders.forEach(order => {
        if (!ordersMap.has(order.userId)) {
          ordersMap.set(order.userId, []);
        }
        ordersMap.get(order.userId).push(order);
      });

      return userIds.map(userId => ordersMap.get(userId) || []);
    },
  );
}
