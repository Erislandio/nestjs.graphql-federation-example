import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ProductsLoader } from './products.loader';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly productsLoader: ProductsLoader,
  ) {}

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productsService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id') id: string) {
    return this.productsService.findOne(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.productsLoader.batchProducts.load(reference.id);
  }
}
