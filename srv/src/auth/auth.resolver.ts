import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { CurrentGqlUser } from './current-gql-user.decorator';
import { AuthLoginInput } from './dto/auth-login.input';
import { AuthRegisterInput } from './dto/auth-register.input';
import { AuthResult } from './dto/auth-result.dto';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => User, { name: 'me' })
  @UseGuards(GqlAuthGuard)
  async findCurrentUser(@CurrentGqlUser() user: User) {
    return user;
  }

  @Mutation(() => AuthResult)
  async loginUser(@Args('data') input: AuthLoginInput) {
    const result = await this.authService.login(input);
    return result;
  }

  @Mutation(() => AuthResult)
  async registerUser(@Args('data') input: AuthRegisterInput) {
    const result = await this.authService.register(input);
    return result;
  }
}
