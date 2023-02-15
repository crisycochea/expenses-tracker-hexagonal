import { Category } from "../models/category";

export interface CategoryRepository {
  listCategories(): Promise<Category[]>;
}
