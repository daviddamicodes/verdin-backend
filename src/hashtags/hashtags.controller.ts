import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('hashtags')
@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    return 'all top hashtags';
  }

  @Get('/:tag/posts')
  getPostsForHashtag(@Param('tag') tag: string): string {
    return `show all posts with the hashtag ${tag}`;
  }
}
