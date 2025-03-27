/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Reminder } from './entity/reminder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';
import * as nodemailer from 'nodemailer';
import { Cron } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class ReminderService {
  constructor(
    @InjectRepository(Reminder)
    private reminderRepository: Repository<Reminder>,
    private readonly configService: ConfigService,
  ) {}

  async createReminder(reminderData: Partial<Reminder>): Promise<Reminder> {
    const reminder = this.reminderRepository.create(reminderData);
    return await this.reminderRepository.save(reminder);
  }
  // Fetch reminders scheduled for today
  async getTodaysReminders(): Promise<Reminder[]> {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA');
    return await this.reminderRepository.find({
      where: {
        date: formattedDate,
        isCompleted: false, // Only non-completed reminders
      },
      relations: ['category'],
    });
  }

  // Fetch reminders scheduled for tomorrow or any future date
  async getUpcomingReminders(): Promise<Reminder[]> {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA'); // Get today's date in YYYY-MM-DD format
    return await this.reminderRepository.find({
      where: {
        date: Raw((alias) => `${alias} > '${formattedDate}'`), // Get reminders that are after today
        isCompleted: false, // Only non-completed reminders
      },
      relations: ['category'],
    });
  }

  async markAsComplete(id: number): Promise<void> {
    const reminder = await this.reminderRepository.findOne({ where: { id } });
    if (!reminder) throw new BadRequestException('Reminder not found');
    reminder.isCompleted = true;
    await this.reminderRepository.save(reminder);
  }
  async sendEmailNotification(reminder: Reminder) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: this.configService.get<string>('NODEMAILER_EMAIL'),
          pass: this.configService.get<string>('NODEMAILER_PASSWORD'),
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await transporter.sendMail({
        from: `"Reminder App" ${this.configService.get<string>('NODEMAILER_EMAIL')}`,
        to: reminder.email,
        subject: `Reminder: ${reminder.title}`,
        text: `Don't forget: ${reminder.description}`,
      });
      await this.markAsComplete(reminder.id);
    } catch (error) {
      console.log(error);
    }
  }
  @Cron('* * * * *') // Runs every minute
  async checkAndSendReminders() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA');
    const reminders = await this.reminderRepository.find({
      where: { date: formattedDate, isCompleted: false },
    });
    for (const reminder of reminders) {
      const [hour, minute] = reminder.time.split(':').map(Number);
      if (hour === currentHour && minute === currentMinute) {
        await this.sendEmailNotification(reminder);
      }
    }
  }
}
