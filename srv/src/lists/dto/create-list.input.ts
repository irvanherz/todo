import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateListInput {
  @Field(() => String, { description: 'User name' })
  title: string;

  @Field(() => String, { description: 'desc' })
  description: string;
}
