import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: '1', name: 'Laptop', price: 1200.00 },
    { id: '2', name: 'Mouse', price: 25.50 },
    { id: '3', name: 'Keyboard', price: 75.00 },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find(product => product.id === id);
  }
}
