import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserRequestBody } from 'src/dto/createUserDto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/@:username')
  async getUserByUsername(@Param('username') username: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Get('/:userId')
  async getUserById(@Param('userId') userId: string): Promise<any> {
    const user = await this.userService.getUserByUserId(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Post('/')
  async createNewUser(
    @Body() createUserRequestBody: CreateUserRequestBody,
  ): Promise<any> {
    const user = this.userService.createUser(createUserRequestBody);
    return user;
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
