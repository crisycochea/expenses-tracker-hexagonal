import express from "express";

import { categoryController } from "./dependencies";

const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.list.bind(categoryController));

export { categoryRouter };
