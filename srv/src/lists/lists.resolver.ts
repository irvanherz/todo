import {
  Args,
  Int,
  Mutation,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Task } from 'src/tasks/entities/task.entity';
import { CreateListInput } from './dto/create-list.input';
import { UpdateListInput } from './dto/update-list.input';
import { List } from './entities/list.entity';
import { ListsService } from './lists.service';

@Resolver(() => List)
export class ListsResolver {
  constructor(private readonly listsService: ListsService) {}

  @Mutation(() => List)
  async createList(@Args('data') input: CreateListInput) {
    return await this.listsService.create(input);
  }

  @Query(() => [List], { name: 'lists' })
  async findAll() {
    return await this.listsService.findAll();
  }

  @Query(() => List, { name: 'list' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.listsService.findOne(id);
  }

  @Mutation(() => List)
  async updateList(@Args('data') input: UpdateListInput) {
    return await this.listsService.update(input);
  }

  @Mutation(() => List)
  async removeList(@Args('id', { type: () => Int }) id: number) {
    return await this.listsService.remove(id);
  }

  @ResolveField(() => [Task])
  tasks() {
    return [];
  }
}
