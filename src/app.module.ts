import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppConfigModule} from "./config/app/configuration.module";
import {DatabaseConfigModule} from "./config/database/configuration.module";
import {TypeOrmModule} from "@nestjs/typeorm";



@Module({
  imports: [ AppConfigModule,TypeOrmModule.forRootAsync({imports:[DatabaseConfigModule]})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
