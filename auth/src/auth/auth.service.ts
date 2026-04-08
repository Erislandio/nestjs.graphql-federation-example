import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { LoginInput, SignUpInput } from "./dto/auth.input";
import * as bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async signUp(input: SignUpInput) {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const userId = uuidv4(); // Mocking user ID generation

    const credential = await this.prisma.authCredential.create({
      data: {
        email: input.email,
        password: hashedPassword,
        userId: userId,
      },
    });

    return {
      access_token: this.jwtService.sign({ sub: credential.userId, email: credential.email }),
      userId: credential.userId,
    };
  }

  async login(input: LoginInput) {
    const credential = await this.prisma.authCredential.findUnique({
      where: { email: input.email },
    });

    if (!credential || !(await bcrypt.compare(input.password, credential.password))) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return {
      access_token: this.jwtService.sign({ sub: credential.userId, email: credential.email }),
      userId: credential.userId,
    };
  }
}
