import { DataSource, EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './users.entity';
// import { typeormConfig } from 'src/config/typeorm.config';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {}

// const dataSource = new DataSource(typeormConfig);

// export const UserRepository = dataSource.getRepository(UserEntity).extend({});
