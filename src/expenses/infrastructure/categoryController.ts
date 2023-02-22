import { NextFunction, Request, Response } from "express";

import { validate } from "../../shared/infrastructure/express/dectorators";
import { CreateCategoryUseCase } from "../application/useCases/createCategoryUseCase";
import { EditCategoryUseCase } from "../application/useCases/editCategoryUseCase";
import { GetCategoryByIdUseCase } from "../application/useCases/getCategoryByIdUseCase";
import { ListCategoriesUseCase } from "../application/useCases/listCategoriesUseCase";
import { Category } from "../domain/models/category";

export class CategoryController {
  constructor(
    private readonly listCategoriesUseCase: ListCategoriesUseCase,
    private readonly getCategoryByIdUseCase: GetCategoryByIdUseCase,
    private readonly editCategoryUseCase: EditCategoryUseCase,
    private readonly createCategoryUseCase: CreateCategoryUseCase
  ) {}

  @validate
  async editCategory(req: Request, res: Response, next: NextFunction) {
    const categoryId = parseInt(req.params.id);
    let category = new Category(
      categoryId,
      req.body.name,
      req.body.description
    );
    try {
      category = await this.editCategoryUseCase.run(category);
      res.status(200).send(category);
    } catch (e) {
      next(e);
    }
  }

  async listCategories(req: Request, res: Response) {
    const categoriesList = await this.listCategoriesUseCase.run();
    res.status(200).send(categoriesList);
  }

  @validate
  async getCategoryById(req: Request, res: Response, next: NextFunction) {
    const categoryId = parseInt(req.params.id);
    try {
      const category = await this.getCategoryByIdUseCase.run(categoryId);
      res.status(200).send(category);
    } catch (e) {
      next(e);
    }
  }

  @validate
  async createCategory(req: Request, res: Response, next: NextFunction) {
    const categoryId = parseInt(req.params.id);
    const category = new Category(
      categoryId,
      req.body.name,
      req.body.description
    );
    try {
      const newCategory = await this.createCategoryUseCase.run(category);
      res.status(200).send(newCategory);
    } catch (e) {
      next(e);
    }
  }
}
