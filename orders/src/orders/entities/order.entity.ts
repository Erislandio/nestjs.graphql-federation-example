import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { Product } from './product.entity';

@ObjectType()
export class Order {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  userId: string;

  @Field(() => User)
  user?: User;

  @Field(() => [ID])
  productIds: string[];

  @Field(() => [Product])
  products?: Product[];
}
