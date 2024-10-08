import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Mutation(() => Task)
  @UseGuards(GqlAuthGuard)
  async createTask(@Args('data') input: CreateTaskInput) {
    return await this.tasksService.create(input);
  }

  @Query(() => [Task], { name: 'tasks' })
  async findAll() {
    return await this.tasksService.findAll();
  }

  @Query(() => Task, { name: 'task' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.tasksService.findOne(id);
  }

  @Mutation(() => Task)
  async updateTask(@Args('data') input: UpdateTaskInput) {
    return await this.tasksService.update(input);
  }

  @Mutation(() => Task)
  async removeTask(@Args('id', { type: () => Int }) id: number) {
    return await this.tasksService.remove(id);
  }

  // @ResolveField(() => List)
  // list() {
  //   return {};
  // }
}
