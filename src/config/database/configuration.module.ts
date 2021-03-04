import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { DatabaseConfigService } from './configuration.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                POSTGRES_HOST: Joi.string().default('MyApp'),
                POSTGRES_PORT: Joi.number().default(3000),
                POSTGRES_DATABASE: Joi.string(),
                POSTGRES_USER: Joi.string(),
                POSTGRES_PASSWORD: Joi.string(),
                MODE:Joi.string()

            }),
        }),
    ],
    providers: [ConfigService, DatabaseConfigService],
    exports: [ConfigService, DatabaseConfigService],
})
export class DatabaseConfigModule {}