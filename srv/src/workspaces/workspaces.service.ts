import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { Repository } from 'typeorm';
import { CreateWorkspaceInput } from './dto/create-workspace.input';
import { UpdateWorkspaceInput } from './dto/update-workspace.input';
import { Workspace } from './entities/workspace.entity';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspace)
    private readonly workspacesRepository: Repository<Workspace>,
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  async create(input: CreateWorkspaceInput) {
    const workspace = this.workspacesRepository.create(input);
    return this.workspacesRepository.save(workspace);
  }

  async findAll() {
    const workspaces = await this.workspacesRepository.find();
    return workspaces;
  }

  async findOne(id: number) {
    const workspace = await this.workspacesRepository.findOne({
      where: { id },
    });
    return workspace;
  }

  async update(input: UpdateWorkspaceInput) {
    const workspace = await this.workspacesRepository.findOne({
      where: { id: input.id },
    });
    if (!workspace) {
      throw new Error('Workspace not found');
    }
    Object.assign(
      workspace,
      Object.fromEntries(Object.entries(input).filter(([_, value]) => value)),
    );
    return this.workspacesRepository.save(workspace);
  }

  async remove(id: number) {
    const workspace = await this.workspacesRepository.findOne({
      where: { id },
    });
    if (!workspace) {
      throw new Error('Workspace not found');
    }
    return this.workspacesRepository.remove(workspace);
  }

  async findAllTasks(workspaceId: number) {
    return await this.tasksRepository.find({ where: { workspaceId } });
  }
}
