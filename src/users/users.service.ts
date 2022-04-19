import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepo: Repository<UserEntity>,
  ) {}

  /**
   * @description find user by username
   * @returns {Promise<UserEntity>} user if found
   */
  public async getUserByUsername(username: string): Promise<UserEntity> {
    return await this.usersRepo.findOne({ where: { username } });
  }

  /**
   * @description find all user by userId
   * @returns {Promise<UserEntity>} user if found
   */
  public async getUserByUserId(userId: string): Promise<UserEntity> {
    return await this.usersRepo.findOne({ where: { id: userId } });
  }

  /**
   * @description find all user by userId
   * @returns {Promise<UserEntity>} user if created
   */
  public async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return await this.usersRepo.create(user);
  }
}
