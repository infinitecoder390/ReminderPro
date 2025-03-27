import { Module } from '@nestjs/common';
import { ReminderService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reminder } from './entity/reminder.entity';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Reminder])],
  controllers: [ReminderController],
  providers: [ReminderService, ConfigService],
  exports: [ReminderService],
})
export class ReminderModule {}
