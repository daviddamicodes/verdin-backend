import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  username: string;

  @Column('string', { length: 30, nullable: false, unique: true })
  name: string;

  @Column('string', { length: 50 })
  avatar: string;

  @Column('string', { length: 240 })
  bio: string;

  @Column('string', { name: 'follower_count', default: 0 })
  followerCount: number;

  @Column('string', { name: 'following_count', default: 0 })
  followingCount: number;

  @Column('boolean', { default: false })
  verified: boolean;
}
