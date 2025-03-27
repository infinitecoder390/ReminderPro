import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const dataSourceOptions = (
  configService: ConfigService,
): DataSourceOptions => {
  return {
    type: 'postgres',
    url: configService.get<string>('POSTGRES_DB_URI'),
    entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
    synchronize: process.env.NODE_ENV === 'production' ? false : true,
    logging: ['info'],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    namingStrategy: new SnakeNamingStrategy(),
    migrations: [join(__dirname, '..', 'migrations/*{.ts,.js}')],
  };
};
