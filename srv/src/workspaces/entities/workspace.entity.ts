import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Workspace {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'User id' })
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  @Field(() => String, { description: 'User name' })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  @Field(() => String, { description: 'desc' })
  description: string;

  @CreateDateColumn({ type: 'timestamptz' })
  @Field(() => Date, { description: 'User created at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  @Field(() => Date, { description: 'User updated at' })
  updatedAt: Date;
}
