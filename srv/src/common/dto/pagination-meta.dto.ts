import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaginationMetaDto {
  @Field()
  numItems: number;

  @Field()
  numPages: number;

  @Field()
  page: number;

  @Field()
  limit: number;
}
