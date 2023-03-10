import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '../services/app.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
