import { NextFunction, Request, Response } from "express";

// import { exceptionHandler } from "../../shared/infrastructure/errorHandlerDecorator";
// import { ObjectNotFound } from "../application/exceptions/objectNotFound";
import { GetCategoryByIdUseCase } from "../application/useCases/getCategoryByIdUseCase";
import { ListCategoriesUseCase } from "../application/useCases/listCategoriesUseCase";

export class CategoryController {
  constructor(
    private readonly listCategoriesUseCase: ListCategoriesUseCase,
    private readonly getCategoryByIdUseCase: GetCategoryByIdUseCase
  ) {}

  async listCategories(req: Request, res: Response) {
    const categoriesList = await this.listCategoriesUseCase.run();
    res.status(200).send(categoriesList);
  }

  // async getCategoryById(req: Request, res: Response) {
  //   const categoryId = parseInt(req.params.id);
  //   const category = await this.getCategoryByIdUseCase.run(categoryId);
  //   res.status(200).send(category);
  // }
  // }

  async getCategoryById(req: Request, res: Response, next: NextFunction) {
    // TODO validate id is int
    const categoryId = parseInt(req.params.id);
    try {
      const category = await this.getCategoryByIdUseCase.run(categoryId);
      res.status(200).send(category);
    } catch (e) {
      next(e);
    }
  }
}
