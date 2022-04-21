import { Module } from '@nestjs/common';
import { HashtagsController } from './hashtags.controller';

@Module({})
export class HashtagsModule {
  controllers: [HashtagsController];
}
