import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  findByIds(ids: readonly string[]) {
    return this.prisma.product.findMany({
      where: {
        id: { in: ids as string[] },
      },
    });
  }
}
