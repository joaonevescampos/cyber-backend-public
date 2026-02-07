export interface Category {
  id: number;
  name: string;
  description: string;
  url_icon: string;
}

export interface CategoryCard {
  id: number;
  name: string;
  url_icon: string;
}

export interface CategoryCreate {
  name: string;
  description: string;
  url_icon: string;
}

export interface CategoryRepository {
  create(data: CategoryCreate): Promise<Category>;
  findAll(): Promise<CategoryCard[]>;
}
