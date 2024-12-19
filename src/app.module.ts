import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [JokesModule, TypeOrmModule.forRoot(typeOrmConfig), CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
