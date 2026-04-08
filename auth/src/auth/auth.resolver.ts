import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { AuthPayload } from "./entities/auth-payload.entity";
import { LoginInput, SignUpInput } from "./dto/auth.input";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async login(@Args("input") input: LoginInput) {
    return this.authService.login(input);
  }

  @Mutation(() => AuthPayload)
  async signup(@Args("input") input: SignUpInput) {
    return this.authService.signUp(input);
  }
}
