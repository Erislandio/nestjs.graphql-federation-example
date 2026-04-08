import { Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  private orders: Order[] = [
    { id: '101', userId: '1', productIds: ['1', '2'] },
    { id: '102', userId: '2', productIds: ['3'] },
  ];

  findAll() {
    return this.orders;
  }

  findByUser(userId: string) {
    return this.orders.filter(order => order.userId === userId);
  }
}
