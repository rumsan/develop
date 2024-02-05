import { Module } from '@nestjs/common';

import { SlackService } from '../utils/slack.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService, SlackService],
})
export class AppModule {}
