"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const dotenv = require("dotenv");
const environment = process.env.NODE_ENV || 'development';
console.log('environment :', environment);
dotenv.config({ path: `.env.${environment}` });
exports.typeOrmConfig = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: environment === 'development',
};
//# sourceMappingURL=typeorm.config.js.map