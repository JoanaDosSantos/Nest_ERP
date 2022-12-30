import { NestFactory } from '@nestjs/core';
import { AppModule } from './controller/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
