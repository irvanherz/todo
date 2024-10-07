import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListInput } from './dto/create-list.input';
import { UpdateListInput } from './dto/update-list.input';
import { List } from './entities/list.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private readonly listsRepository: Repository<List>,
  ) {}

  async create(input: CreateListInput) {
    const list = this.listsRepository.create(input);
    return this.listsRepository.save(list);
  }

  async findAll() {
    const lists = await this.listsRepository.find();
    return lists;
  }

  async findOne(id: number) {
    const list = await this.listsRepository.findOne({ where: { id } });
    return list;
  }

  async update(input: UpdateListInput) {
    const list = await this.listsRepository.findOne({
      where: { id: input.id },
    });
    if (!list) {
      throw new Error('List not found');
    }
    Object.assign(
      list,
      Object.fromEntries(Object.entries(input).filter(([_, value]) => value)),
    );
    return this.listsRepository.save(list);
  }

  async remove(id: number) {
    const list = await this.listsRepository.findOne({ where: { id } });
    if (!list) {
      throw new Error('List not found');
    }
    return this.listsRepository.remove(list);
  }
}
