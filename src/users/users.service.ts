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

  public async getUserByUsername(username: string): Promise<UserEntity> {
    return await this.usersRepo.findOne({ where: { username } });
  }
}
