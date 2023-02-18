import { Category } from "../models/category";

export interface CategoryRepository {
  editCategory(category: Category): Promise<Category>;
  listCategories(): Promise<Category[]>;
  getCategoryById(id: number): Promise<Category>;
}
