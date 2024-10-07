import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWorkspaceInput {
  @Field(() => String, { description: 'User name' })
  name: string;

  @Field(() => String, { description: 'desc', nullable: true })
  description: string = '';
}
