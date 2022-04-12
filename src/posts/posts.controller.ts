import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    return `get all posts`;
  }

  @Get('/:postId')
  getPostDetails(@Param() param): string {
    return `details of postId = ${param.postId}`;
  }

  @Post('/')
  createNewPost(): string {
    return `new post created`;
  }

  @Delete('/:postId')
  deletePost(@Param() param): string {
    return `deleted postId = ${param.postId}`;
  }

  @Put('/:postId/like')
  likePost(@Param() param): string {
    return `liked post ${param.postId}`;
  }

  @Delete('/:postId/like')
  unlikePost(@Param() param): string {
    return `unliked post ${param.postId}`;
  }
}
