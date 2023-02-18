import { body, param } from "express-validator";

export const categoryBodyValidator = [
  body("name").isString().notEmpty(),
  body("description").isString().optional({ nullable: true }),
];

export const categoryIdParamValidator = [param("id").isInt().notEmpty()];
