import { CategoryRepository } from "../domain/interfaces/categoryRepository";
import { Category } from "../domain/models/category";

const categories: Category[] = [
  {
    name: "Category 1",
    description: null,
  },
  {
    name: "Category 2",
    description: "Lorem Ipsum",
  },
];

export class InmemoryCategoryRepository implements CategoryRepository {
  async listCategories(): Promise<Category[]> {
    return categories;
  }
}
