import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(input: CreateUserInput) {
    input.password = await bcrypt.hash(input.password || '', 10);
    const user = this.usersRepository.create(input);
    return this.usersRepository.save(user);
  }

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    return user;
  }

  async update(input: UpdateUserInput) {
    const user = await this.usersRepository.findOne({
      where: { id: input.id },
    });
    if (!user) {
      throw new Error('User not found');
    }
    Object.assign(
      user,
      Object.fromEntries(Object.entries(input).filter(([_, value]) => value)),
    );
    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return this.usersRepository.remove(user);
  }
}
