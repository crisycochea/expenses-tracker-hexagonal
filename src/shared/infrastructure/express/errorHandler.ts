import { NextFunction, Request, Response } from "express";

import { ObjectNotFound } from "../../../expenses/application/exceptions/objectNotFound";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ObjectNotFound) {
    res.status(404).send({ error: error.message });
  } else {
    next("Unexpected error");
  }
}
