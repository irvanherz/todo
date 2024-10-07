import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field(() => Float, { description: 'Latitude of the place' })
  latitude: number;

  @Field(() => Float, { description: 'Longitude of the place' })
  longitude: number;
}
