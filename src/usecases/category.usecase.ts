import {
  Category,
  CategoryCreate,
  CategoryCard,
} from "../interfaces/category.interface";
import { CategoryRepository } from "../interfaces/category.interface";
import { CategoryRepositoryPrisma } from "../repositories/category.repository";

class CategoryUsecase {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepositoryPrisma();
  }

  async create({ name, description, url_icon }: CategoryCreate): Promise<Category> {
    const result = await this.categoryRepository.create({
      name,
      description,
      url_icon,
    });

    return result;
  }

  async findAll(): Promise<CategoryCard[]> {
    const result = await this.categoryRepository.findAll();
    return result;
  }
}

export default new CategoryUsecase();
