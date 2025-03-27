import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcryptjs';
import { BadRequestException } from '@nestjs/common';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Exclude()
  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    // Check if password is defined and not empty
    if (this.password) {
      try {
        const hashedPassword: string = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
      } catch (error) {
        console.error('Error hashing password:', error);
        throw new BadRequestException('Error hashing password');
      }
    }
  }
}
