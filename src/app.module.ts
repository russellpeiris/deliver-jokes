import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './jokes/configs/typeorm.config';

@Module({
  imports: [JokesModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
