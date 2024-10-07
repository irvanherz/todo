import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User name' })
  username: string;

  @Field(() => String, { description: 'email' })
  email: string;

  @Field(() => String, { description: 'fullName' })
  fullName: string;

  @Field(() => String, { description: 'pass' })
  password: string;
}
