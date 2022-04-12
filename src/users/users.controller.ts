import { Controller, Delete, Get, Param, Patch, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param() param): string {
    return `details of username = ${param.username}`;
  }

  @Get('/:userId')
  getUserById(@Param() param): string {
    return `details of username = ${param.userId}`;
  }

  @Patch('/:userId')
  updateUserDetails(@Param() param): string {
    return `details of user (id = ${param.userId}) updated`;
  }

  @Put('/:userId/follow')
  followUser(): string {
    return 'you followed user';
  }

  @Delete('/userId/follow')
  unfollowUser(): string {
    return 'you unfollowed user';
  }

  @Get('/:userId/followers')
  getUserfollowers(@Param() param): string {
    return 'get user followers';
  }

  @Put('/:userId/followers')
  getUsersfollowers(): string {
    return `get followers o given user`;
  }
}
