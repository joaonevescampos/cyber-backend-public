import {
  Category,
  CategoryCreate,
  CategoryCard,
  CategoryRepository,
} from "../interfaces/category.interface";
import { prisma } from "../database/prisma-client";

class CategoryRepositoryPrisma implements CategoryRepository {
  async create(data: CategoryCreate): Promise<Category> {
    const result = await prisma.category.create({
      data: {
        name: data.name,
        description: data.description,
        url_icon: data.url_icon,
      },
    });

    return result;
  }

  async findAll(): Promise<CategoryCard[]> {
    const result = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        url_icon: true,
      },
    });
    return result;
  }
}

export { CategoryRepositoryPrisma };
