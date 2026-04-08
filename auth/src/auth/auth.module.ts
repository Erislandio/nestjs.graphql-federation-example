import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "secretKey", // Change this in production
      signOptions: { expiresIn: "1h" },
    }),
  ],
  providers: [AuthService, AuthResolver, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
