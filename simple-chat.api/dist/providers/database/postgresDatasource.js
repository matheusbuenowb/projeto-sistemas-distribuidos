"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path_1 = require("path");
const typeorm_1 = require("typeorm");
dotenv.config({ path: (0, path_1.join)(__dirname, '../../../.env') });
const PostgresDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: false,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
    migrationsRun: true,
});
exports.default = PostgresDataSource;
//# sourceMappingURL=postgresDatasource.js.map