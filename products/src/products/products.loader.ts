import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

@Injectable({ scope: Scope.REQUEST })
export class ProductsLoader {
  constructor(private readonly productsService: ProductsService) {}

  public readonly batchProducts = new DataLoader<string, Product>(
    async (ids: readonly string[]) => {
      const products = await this.productsService.findByIds(ids);
      const productsMap = new Map(products.map(product => [product.id, product]));
      return ids.map(id => productsMap.get(id));
    },
  );
}
