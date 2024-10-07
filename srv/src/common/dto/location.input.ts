import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class LocationInput {
  @Field(() => Float, { description: 'Latitude of the place' })
  latitude: number;

  @Field(() => Float, { description: 'Longitude of the place' })
  longitude: number;
}
