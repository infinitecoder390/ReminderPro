import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { Public } from 'src/common/public.decorator';
import * as bcrypt from 'bcryptjs';
@Controller('api/auth')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  @Public()
  async createUser(@Body() body: CreateUserDto) {
    const { username, email, password } = body;
    const user = await this.userService.createUser(username, email, password);
    const jwtToken = this.authService.generateJwt(user);
    return {
      access_token: jwtToken,
      message: 'User registered successfully.',
      user,
    };
  }
  @Post('login')
  @Public()
  async login(@Body() body: { email: string; password: string }) {
    // Find user by email
    const user = await this.userService.findByEmail(body.email);
    // If user not found or password doesn't match, throw error
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }
    // Generate JWT for the user
    const jwt = this.authService.generateJwt(user);
    return {
      access_token: jwt,
      message: 'User Logged-In successfully.',
      user,
    };
  }
}
