import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateListInput } from './create-list.input';

@InputType()
export class UpdateListInput extends PartialType(CreateListInput) {
  @Field(() => Int)
  id: number;
}
