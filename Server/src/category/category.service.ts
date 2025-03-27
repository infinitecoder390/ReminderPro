import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async find(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
  // Find category by name
  async findByName(name: string): Promise<Category | null> {
    return this.categoryRepository.findOne({ where: { name } });
  }
  async findById(id: number): Promise<Category | null> {
    return this.categoryRepository.findOne({ where: { id } });
  }
  // Create a new category
  async createCategory(name: string): Promise<Category> {
    const existingCategory = await this.findByName(name);
    if (existingCategory) {
      throw new NotFoundException(`Category '${name}' already exists`);
    }
    const category = this.categoryRepository.create({ name });
    return this.categoryRepository.save(category);
  }
  async deleteCategoryById(id: number): Promise<void> {
    const category = await this.findById(id);
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    await this.categoryRepository.remove(category);
  }
}
