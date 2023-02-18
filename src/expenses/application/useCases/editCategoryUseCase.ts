import { CategoryRepository } from "../../domain/interfaces/categoryRepository";
import { Category } from "../../domain/models/category";

export class EditCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async run(category: Category): Promise<Category> {
    return this.categoryRepository.editCategory(category);
  }
}
