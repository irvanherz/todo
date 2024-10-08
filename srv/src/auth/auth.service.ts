import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { AuthLoginInput } from './dto/auth-login.input';
import { AuthRegisterInput } from './dto/auth-register.input';
import { AuthResult } from './dto/auth-result.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    username = username.toLowerCase();
    const user = await this.usersRepository.findOne({ where: { username } });
    if (!user) {
      return null;
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) return null;
    return user;
  }

  async login(input: AuthLoginInput): Promise<AuthResult> {
    input.usernameOrEmail = input.usernameOrEmail.toLowerCase();
    const user = await this.usersRepository.findOne({
      where: [
        { username: input.usernameOrEmail },
        { email: input.usernameOrEmail },
      ],
    });
    if (!user)
      throw new UnauthorizedException(
        'Invalid username or password.',
        'invalid-credentials',
      );
    const match = await bcrypt.compare(input.password, user.password);
    if (!match)
      throw new UnauthorizedException(
        'Invalid username or password.',
        'invalid-credentials',
      );
    const accessToken = await this.createAccessToken(user);
    const refreshToken = await this.createRefreshToken(user);
    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  async register(input: AuthRegisterInput): Promise<AuthResult> {
    input.username = input.username.toLowerCase();
    input.email = input.email.toLowerCase();
    try {
      console.log('register');
      const user = this.usersRepository.create(input);
      user.password = await bcrypt.hash(input.password, 10);
      await this.usersRepository.save(user);
      const accessToken = await this.createAccessToken(user);
      const refreshToken = await this.createRefreshToken(user);
      return {
        user,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      console.log('a');
      if (error instanceof QueryFailedError) {
        console.log('b');
        if (error.driverError.code === '23505')
          throw new BadRequestException(
            'Username or email already exists.',
            'invalid-username-or-email',
          );
        console.log('c');
      }
      throw error;
    }
  }

  async createAccessToken(user: User) {
    const payload = { sub: user.id, name: user.username, role: 'user' };
    return this.jwtService.sign(payload, { expiresIn: '365d' });
  }

  async createRefreshToken(user: User) {
    const payload = { sub: user.id, name: user.username, role: 'user' };
    return this.jwtService.sign(payload, { expiresIn: '365d' });
  }
}
