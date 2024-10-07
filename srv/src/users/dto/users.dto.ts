import { Field, ObjectType } from '@nestjs/graphql';
import { PaginationMetaDto } from 'src/common/dto/pagination-meta.dto';
import { User } from '../entities/user.entity';

@ObjectType()
export class UsersDto {
  @Field(() => [User])
  data: User[];

  @Field()
  meta: PaginationMetaDto;
}
