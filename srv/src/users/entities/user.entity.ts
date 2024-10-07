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
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'User id' })
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  @Field(() => String, { description: 'User name' })
  username: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  @Field(() => String, { description: 'email' })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  @Field(() => String, { description: 'firstName' })
  firstName: string;

  @Column({ type: 'varchar', length: 255 })
  @Field(() => String, { description: 'lastName' })
  lastName: string;

  @Column({ type: 'varchar', length: 255 })
  @Field(() => String, { description: 'pass' })
  password: string;

  @CreateDateColumn({ type: 'timestamptz' })
  @Field(() => Date, { description: 'User created at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  @Field(() => Date, { description: 'User updated at' })
  updatedAt: Date;
}
