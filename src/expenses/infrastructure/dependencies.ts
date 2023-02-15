import { ListCategories } from "../application/listCategories";
import { CategoryController } from "./categoryController";
import { InmemoryCategoryRepository } from "./inMemoryCategoryRepository";

export const inMemoryCategoryRepository = new InmemoryCategoryRepository();
export const listCategories = new ListCategories(inMemoryCategoryRepository);
export const categoryController = new CategoryController(listCategories);
