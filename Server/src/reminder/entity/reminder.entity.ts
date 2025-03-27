import { Category } from 'src/category/entity/category.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Reminder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column({ type: 'bigint' })
  category_id: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({ default: false })
  isCompleted: boolean;

  @Column({ nullable: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;
}
