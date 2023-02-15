import { ObjectNotFound } from "../application/exceptions/objectNotFound";
import { CategoryRepository } from "../domain/interfaces/categoryRepository";
import { Category } from "../domain/models/category";

const categories: Category[] = [
  {
    id: 1,
    name: "Category 1",
    description: null,
  },
  {
    id: 2,
    name: "Category 2",
    description: "Lorem Ipsum",
  },
];

export class InmemoryCategoryRepository implements CategoryRepository {
  async listCategories(): Promise<Category[]> {
    return categories;
  }
  async getCategoryById(id: number): Promise<Category> {
    const category = categories.find((category) => category.id === id);
    if (category === undefined) {
      throw new ObjectNotFound();
    }
    return category;
  }
}
