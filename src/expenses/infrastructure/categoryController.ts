import { Request, Response } from "express";

import { ListCategories } from "../application/listCategories";

export class CategoryController {
  constructor(private readonly listCategories: ListCategories) {}

  async list(req: Request, res: Response) {
    const categoriesList = await this.listCategories.run();
    res.status(200).send(categoriesList);
  }
}
