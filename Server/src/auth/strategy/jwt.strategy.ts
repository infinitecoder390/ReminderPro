import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
export interface JwtPayload {
  sub: number; // This will store the user id
  username: string;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userService: UserService, // User service to get the user by id
    @InjectRepository(User)
    private userRepository: Repository<User>, // Injecting the user repository for validation
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from Authorization header
      ignoreExpiration: false, // Do not ignore expiration time
      secretOrKey: configService.get<string>('JWT_SECRET'), // Use secret from environment
    });
  }

  async validate(payload: JwtPayload) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { sub: userId } = payload;
    const user = await this.userRepository.findOne({ where: { id: userId } });

    // If user does not exist, throw an exception
    if (!user) {
      throw new BadRequestException('User not found');
    }

    // Return user object after successful validation
    return user;
  }
}
