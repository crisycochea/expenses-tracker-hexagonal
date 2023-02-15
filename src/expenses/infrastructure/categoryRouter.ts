import express from "express";

import { categoryController } from "./dependencies";

const categoryRouter = express.Router();

categoryRouter.get(
  "/",
  categoryController.listCategories.bind(categoryController)
);

categoryRouter.get(
  "/:id",
  categoryController.getCategoryById.bind(categoryController)
);

export { categoryRouter };
