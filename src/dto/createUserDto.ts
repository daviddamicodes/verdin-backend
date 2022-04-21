import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserRequestBody {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  avatar?: string;

  @ApiPropertyOptional()
  bio?: string;
}

export class UpdateUserRequestBody {
  @ApiProperty()
  password?: string;

  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  avatar?: string;

  @ApiPropertyOptional()
  bio?: string;
}
