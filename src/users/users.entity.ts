import { VerdinBaseEntity } from 'src/commons/base.entity';
import { Column, Entity } from 'typeorm';

// @Entity('users')
@Entity()
export class UserEntity extends VerdinBaseEntity {
  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  @Column({ length: 50 })
  avatar: string;

  @Column({ length: 240 })
  bio: string;

  @Column({ name: 'follower_count', default: 0 })
  followerCount: number;

  @Column({ name: 'following_count', default: 0 })
  followingCount: number;

  @Column('boolean', { default: false })
  verified: boolean;
}
