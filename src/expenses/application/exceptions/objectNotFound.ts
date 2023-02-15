import { BaseException } from "../../../shared/application/baseException";

export class ObjectNotFound extends BaseException {
  constructor() {
    super("Can't find the object");
  }
}
