import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthLoginInput {
  @Field()
  usernameOrEmail: string;

  @Field()
  password: string;
}
