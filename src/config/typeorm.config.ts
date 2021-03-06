import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'integration-test-user',
  password: 'passw0rd',
  database: 'taskmanagement',
  autoLoadEntities: true,
  synchronize: true,
};
