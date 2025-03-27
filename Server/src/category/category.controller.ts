import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entity/category.entity';

@Controller('api/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async find(): Promise<Category[] | null> {
    return this.categoryService.find();
  }
  // Get category by name
  @Get('name/:name')
  async findByName(@Param('name') name: string): Promise<Category | null> {
    return this.categoryService.findByName(name);
  }

  // Get category by ID
  @Get('id/:id')
  async findById(@Param('id') id: number): Promise<Category | null> {
    return this.categoryService.findById(id);
  }
  // Create a new category
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: { name: string }): Promise<Category> {
    return this.categoryService.createCategory(body.name);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number): Promise<void> {
    await this.categoryService.deleteCategoryById(id);
  }
}
