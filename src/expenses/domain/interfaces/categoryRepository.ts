import { Category } from "../models/category";

export interface CategoryRepository {
  listCategories(): Promise<Category[]>;
  getCategoryById(id: number): Promise<Category>;
}
