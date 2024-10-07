import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      console.log(err);

      if (info?.name === 'TokenExpiredError') {
        throw new UnauthorizedException(
          'Token already expired',
          'access-token-expired',
        );
      } else if (info?.name === 'JsonWebTokenError') {
        throw new UnauthorizedException(
          'Invalid access token',
          'invalid-access-token',
        );
      }
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
