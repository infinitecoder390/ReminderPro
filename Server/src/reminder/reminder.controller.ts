import { Controller, Post, Get, Param, Body, Patch } from '@nestjs/common';
import { ReminderService } from './reminder.service';
import { Reminder } from './entity/reminder.entity';

@Controller('api/reminders')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}
  @Post()
  async createReminder(
    @Body() reminderData: Partial<Reminder>,
  ): Promise<Reminder> {
    return this.reminderService.createReminder(reminderData);
  }

  // Get upcoming reminders (for today)
  @Get('upcoming')
  async getUpcomingReminders(): Promise<Reminder[]> {
    return this.reminderService.getUpcomingReminders();
  }

  // Get upcoming reminders (for today)
  @Get('todays')
  async getTodays(): Promise<Reminder[]> {
    return this.reminderService.getTodaysReminders();
  }
  // Mark reminder as completed
  @Patch(':id/complete')
  async markAsComplete(@Param('id') id: number): Promise<void> {
    return this.reminderService.markAsComplete(id);
  }
}
