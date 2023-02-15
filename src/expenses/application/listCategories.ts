import { CategoryRepository } from "../domain/interfaces/categoryRepository";
import { Category } from "../domain/models/category";

export class ListCategories {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async run(): Promise<Category[]> {
    return this.categoryRepository.listCategories();
  }
}
