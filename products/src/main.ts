import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4002);
  console.log(`Products service is running on: http://localhost:4002/graphql`);
}
bootstrap();
