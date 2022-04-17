import { Controller, Delete, Get, Param, Patch, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/@:username')
  async getUserByUsername(@Param('username') username: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  @Get('/:userId')
  getUserById(@Param('userId') userId: string): string {
    return `details of username = ${userId}`;
  }

  @Patch('/:userId')
  updateUserDetails(@Param('userId') userId: string): string {
    return `details of user (id = ${userId}) updated`;
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
