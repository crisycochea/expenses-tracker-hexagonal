import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import { validate } from "../../shared/infrastructure/express/dectorators";
import { EditCategoryUseCase } from "../application/useCases/editCategoryUseCase";
import { GetCategoryByIdUseCase } from "../application/useCases/getCategoryByIdUseCase";
import { ListCategoriesUseCase } from "../application/useCases/listCategoriesUseCase";
import { Category } from "../domain/models/category";

export class CategoryController {
  constructor(
    private readonly listCategoriesUseCase: ListCategoriesUseCase,
    private readonly getCategoryByIdUseCase: GetCategoryByIdUseCase,
    private readonly editCategoryUseCase: EditCategoryUseCase
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
}
