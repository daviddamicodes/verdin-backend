import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    return 'all top hashtags';
  }

  @Get('/:tag/posts')
  getPostsForHashtag(@Param() param): string {
    return `show all posts with the hashtag ${param.tag}`;
  }
}
