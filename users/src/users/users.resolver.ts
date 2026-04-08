import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from "@nestjs/graphql";
import { User, UserInput } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { UsersLoader } from "./users.loader";

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersLoader: UsersLoader,
  ) {}

  @Query(() => [User], { name: "users" })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: "user" })
  findOne(@Args("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User, { name: "createUser" })
  createUser(@Args("input") input: UserInput) {
    return this.usersService.create(input);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.usersLoader.batchUsers.load(reference.id);
  }
}
