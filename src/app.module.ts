import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { PostsController } from './posts/posts.controller';
// import { HashtagsController } from './hashtags/hashtags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
  // controllers: [AppController, PostsController, HashtagsController],
  // providers: [AppService],
})
export class AppModule {}
