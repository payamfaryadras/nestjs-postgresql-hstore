import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";
/**
 * Service dealing with database config based operations.
 *
 * @class
 */
@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory{
    constructor(private configService: ConfigService) {}

    get postgresHost(): string {
        return this.configService.get<string>('database.postgresHost');
    }

    get postgresPort(): number {
        return Number(this.configService.get<number>('database.postgresPort'));
    }
    get postgresDatabase(): string {
        return this.configService.get<string>('database.postgresDatabase');
    }
    get postgresUser(): string {
        return this.configService.get<string>('database.postgresUser');
    }
    get postgresPassword(): string {
        return this.configService.get<string>('database.postgresPassword');
    }
    get mode(): string {
        return this.configService.get<string>('database.mode');
    }
    public isProduction() {
        return this.mode != 'development';
    }
    public createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: this.postgresDatabase,
            port:this.postgresPort,
            username: this.postgresUser,
            password: this.postgresPassword,
            database: this.postgresDatabase,

            entities: ['**/*.entity{.ts,.js}'],

            migrationsTableName: 'migration',

            migrations: ['src/migration/*.ts'],

            cli: {
                migrationsDir: 'src/migration',
            },

            ssl: this.isProduction(),
        };
    }


}