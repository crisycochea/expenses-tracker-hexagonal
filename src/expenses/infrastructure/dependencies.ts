import { GetCategoryByIdUseCase } from "../application/useCases/getCategoryByIdUseCase";
import { ListCategoriesUseCase } from "../application/useCases/listCategoriesUseCase";
import { CategoryController } from "./categoryController";
import { InmemoryCategoryRepository } from "./inMemoryCategoryRepository";

export const inMemoryCategoryRepository = new InmemoryCategoryRepository();
export const listCategoriesUseCase = new ListCategoriesUseCase(
  inMemoryCategoryRepository
);
export const getCategoryByIdUseCase = new GetCategoryByIdUseCase(
  inMemoryCategoryRepository
);
export const categoryController = new CategoryController(
  listCategoriesUseCase,
  getCategoryByIdUseCase
);
