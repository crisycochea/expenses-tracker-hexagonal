// import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import http from "http";
export function validate(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const [req, res] = args;
    if (!(req instanceof Request) && !(req instanceof http.IncomingMessage)) {
      res
        .status(500)
        .send(
          "Error using the validate decorator. The first parameter of the decorated function has to be a express.Request or http.IncomingMessage instance "
        );
    }
    if (!(res instanceof Response) && !(res instanceof http.ServerResponse)) {
      res
        .status(500)
        .send(
          "Error using the validate decorator. The second parameter of the decorated function has to be a express.Response or http.ServerResponse instance  "
        );
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return originalMethod.apply(this, args);
  };
  return descriptor;
}
