import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Task } from 'src/tasks/entities/task.entity';
import { CreateWorkspaceInput } from './dto/create-workspace.input';
import { UpdateWorkspaceInput } from './dto/update-workspace.input';
import { Workspace } from './entities/workspace.entity';
import { WorkspacesService } from './workspaces.service';

@Resolver(() => Workspace)
export class WorkspacesResolver {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Mutation(() => Workspace)
  async createWorkspace(@Args('data') input: CreateWorkspaceInput) {
    return await this.workspacesService.create(input);
  }

  @Query(() => [Workspace], { name: 'workspaces' })
  async findAll() {
    return await this.workspacesService.findAll();
  }

  @Query(() => Workspace, { name: 'workspace' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.workspacesService.findOne(id);
  }

  @Mutation(() => Workspace)
  async updateWorkspace(@Args('data') input: UpdateWorkspaceInput) {
    return await this.workspacesService.update(input);
  }

  @Mutation(() => Workspace)
  async removeWorkspace(@Args('id', { type: () => Int }) id: number) {
    return await this.workspacesService.remove(id);
  }

  @ResolveField(() => [Task], { name: 'tasks' })
  async findAllTasks(@Parent() workspace: Workspace) {
    return await this.workspacesService.findAllTasks(workspace.id);
  }
}
