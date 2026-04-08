import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4004);
  console.log(`Auth service is running on: http://localhost:4004/graphql`);
}
bootstrap();
