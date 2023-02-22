import { CategoryRepository } from "../../domain/interfaces/categoryRepository";
import { Category } from "../../domain/models/category";

export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async run(category: Category): Promise<Category> {
    return this.categoryRepository.createCategory(category);
  }
}
