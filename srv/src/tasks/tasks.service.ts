import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task, TaskStatus } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  async create(input: CreateTaskInput) {
    const task = this.tasksRepository.create(input);
    return await this.tasksRepository.save(task);
  }

  async findAll() {
    const tasks = await this.tasksRepository.find();
    return tasks;
  }

  async findOne(id: number) {
    const task = await this.tasksRepository.findOne({ where: { id } });
    return task;
  }

  async update(input: UpdateTaskInput) {
    const task = await this.tasksRepository.findOne({
      where: { id: input.id },
    });
    if (!task) {
      throw new Error('Task not found');
    }
    Object.assign(
      task,
      Object.fromEntries(
        Object.entries(input).filter(([_, value]) => value !== undefined),
      ),
    );
    if (input.status === TaskStatus.COMPLETED) task.completedAt = new Date();
    else if (input.status !== null) task.completedAt = null;
    return this.tasksRepository.save(task);
  }

  async remove(id: number) {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new Error('Task not found');
    }
    return this.tasksRepository.remove(task);
  }
}
