import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    return `get all posts`;
  }

  @Get('/:postId')
  getPostDetails(@Param('postId') postId: string): string {
    return `details of postId = ${postId}`;
  }

  @Post('/')
  createNewPost(): string {
    return `new post created`;
  }

  @Delete('/:postId')
  deletePost(@Param('postId') postId: string): string {
    return `deleted postId = ${postId}`;
  }

  @Put('/:postId/like')
  likePost(@Param('postId') postId: string): string {
    return `liked post ${postId}`;
  }

  @Delete('/:postId/like')
  unlikePost(@Param('postId') postId: string): string {
    return `unliked post ${postId}`;
  }

  // @Delete('/:postId/like')
  // unlikePost(@Param() param): string {
  //   return `unliked post ${param.postId}`;
  // }
}
