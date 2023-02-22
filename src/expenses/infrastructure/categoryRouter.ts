import express from "express";

import {
  categoryBodyValidator,
  categoryIdParamValidator,
} from "./categoryValidator";
import { categoryController } from "./dependencies";

const categoryRouter = express.Router();

categoryRouter.get(
  "/",
  categoryController.listCategories.bind(categoryController)
);

categoryRouter.get(
  "/:id",
  categoryIdParamValidator,
  categoryController.getCategoryById.bind(categoryController)
);

categoryRouter.put(
  "/:id",
  categoryIdParamValidator,
  categoryBodyValidator,
  categoryController.editCategory.bind(categoryController)
);

categoryRouter.post(
  "/",
  categoryBodyValidator,
  categoryController.createCategory.bind(categoryController)
);

export { categoryRouter };
