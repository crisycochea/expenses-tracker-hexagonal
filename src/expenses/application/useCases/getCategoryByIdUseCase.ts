import { CategoryRepository } from "../../domain/interfaces/categoryRepository";
import { Category } from "../../domain/models/category";

export class GetCategoryByIdUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async run(id: number): Promise<Category> {
    return this.categoryRepository.getCategoryById(id);
  }
}
