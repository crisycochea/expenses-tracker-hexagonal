import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { categoryRouter } from "./expenses/infrastructure/categoryRouter";
import { healthRouter } from "./health/health-router";
import { errorHandler } from "./shared/infrastructure/express/errorHandler";

function boostrap() {
  const app = express();
  app.use(bodyParser.json());
  app.use("/health", healthRouter);
  app.use("/categories", categoryRouter);

  const { port } = config.server;

  app.use(errorHandler);
  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
