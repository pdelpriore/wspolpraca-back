import { Request } from "express";
import bcrypt from "bcrypt";
import { MiddlewareFn } from "type-graphql";

type TData = {
  userType: string;
  name: string;
  email: string;
  password: string;
};

interface ISignup extends Request {
  data: TData;
}

export interface IContext {
  req: ISignup;
}

export const cryptPasswordMiddleware: MiddlewareFn<IContext> = (
  { context: { req } },
  next
): any => {
  const userPassword = req.data.password;

  bcrypt.genSalt(8, (_, salt) => {
    bcrypt.hash(userPassword, salt, (_, hash) => {
      req.data.password = hash;
      return next();
    });
  });
};
