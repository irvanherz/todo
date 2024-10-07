import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TaskPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

registerEnumType(TaskPriority, {
  name: 'TaskPriority',
});

registerEnumType(TaskStatus, {
  name: 'TaskStatus',
});

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'User id' })
  id: number;

  @Column()
  @Field(() => Int, { description: 'User id' })
  workspaceId: number;

  @Column({ type: 'varchar', length: 255 })
  @Field(() => String, { description: 'User name' })
  title: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  @Field(() => String, { description: 'desc' })
  description: string = '';

  @Column({ type: 'bool', default: false })
  @Field(() => Boolean, { description: 'desc' })
  starred: boolean;

  @Column({ type: 'enum', enum: TaskPriority, default: TaskPriority.NORMAL })
  @Field(() => TaskPriority, { description: 'desc', nullable: true })
  priority?: TaskPriority = TaskPriority.NORMAL;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.OPEN })
  @Field(() => TaskStatus, { description: 'desc' })
  status: TaskStatus = TaskStatus.OPEN;

  @Column({ type: 'timestamptz', nullable: true })
  @Field(() => Date, { description: 'Due date', nullable: true })
  committedAt?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  @Field(() => Date, { description: 'Due date', nullable: true })
  completedAt?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  @Field(() => Date, { description: 'Due date', nullable: true })
  dueAt?: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  @Field(() => Date, { description: 'User created at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  @Field(() => Date, { description: 'User updated at' })
  updatedAt: Date;
}
