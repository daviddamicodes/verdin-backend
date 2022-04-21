import { dataSource } from 'src/config/dataSouce.config';
import { UserEntity } from './users.entity';

export const UserRepository = dataSource.getRepository(UserEntity);
