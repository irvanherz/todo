import { Field, InputType, Int } from '@nestjs/graphql';
import { TaskPriority, TaskStatus } from '../entities/task.entity';

@InputType()
export class CreateTaskInput {
  @Field(() => Int)
  workspaceId: number;

  @Field(() => String, { description: 'User name' })
  title: string;

  @Field(() => String, { description: 'desc' })
  description: string;

  @Field(() => Boolean, { description: 'desc', nullable: true })
  starred?: boolean;

  @Field(() => String, { description: 'desc', nullable: true })
  priority?: TaskPriority;

  @Field(() => TaskStatus, { description: 'desc' })
  status: TaskStatus = TaskStatus.OPEN;

  @Field(() => Date, { description: 'Due date', nullable: true })
  committedAt?: Date;

  @Field(() => Date, { description: 'Due date', nullable: true })
  dueAt?: Date;
}
