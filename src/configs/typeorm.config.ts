import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';
console.log('environment :', environment);
dotenv.config({ path: `.env.${environment}` });

console.log('DB_HOST :', process.env.DB_HOST);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  // synchronize: environment === 'development',
};
