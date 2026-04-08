import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4001);
  console.log(`Users service is running on: http://localhost:4001/graphql`);
}
bootstrap();
