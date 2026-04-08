import { Directive, Field, ID, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;
}

@InputType()
export class UserInput {
  @Field()
  username: string;

  @Field()
  email: string;
}
