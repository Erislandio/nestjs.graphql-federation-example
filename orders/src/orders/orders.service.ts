import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const orders = await this.prisma.order.findMany({
      include: { items: true },
    });
    return orders.map((o) => ({
      ...o,
      productIds: o.items.map((item) => item.productId),
    }));
  }

  async findByUser(userId: string) {
    const orders = await this.prisma.order.findMany({
      where: { userId },
      include: { items: true },
    });
    return orders.map((o) => ({
      ...o,
      productIds: o.items.map((item) => item.productId),
    }));
  }

  async findByUserIds(userIds: readonly string[]) {
    const orders = await this.prisma.order.findMany({
      where: { userId: { in: userIds as string[] } },
      include: { items: true },
    });
    return orders.map((o) => ({
      ...o,
      productIds: o.items.map((item) => item.productId),
    }));
  }
}
