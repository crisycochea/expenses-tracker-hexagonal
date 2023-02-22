import assert from "assert";

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
    const categoryIndex = this.findIndexCategoryById(id);
    return categories[categoryIndex];
  }

  async editCategory(category: Category): Promise<Category> {
    assert(category.id !== null);
    const categoryIndex = this.findIndexCategoryById(category.id);
    categories[categoryIndex] = category;
    return categories[categoryIndex];
  }

  private findIndexCategoryById(id: number) {
    const categoryIndex = categories.findIndex(
      (category) => category.id === id
    );
    if (categoryIndex === -1) {
      throw new ObjectNotFound();
    }
    return categoryIndex;
  }
}
