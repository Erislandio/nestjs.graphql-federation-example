import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsLoader } from './products.loader';

@Module({
  providers: [ProductsResolver, ProductsService, PrismaService, ProductsLoader],
  exports: [ProductsService, ProductsLoader],
})
export class ProductsModule {}
