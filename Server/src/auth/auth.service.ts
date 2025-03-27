import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  generateJwt(user: User) {
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };
    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = this.configService.get<string>('JWT_EXPIRES_IN');
    // Generate the JWT token using secret and expiration time from environment
    return this.jwtService.sign(payload, {
      expiresIn,
      secret,
    });
  }
}
