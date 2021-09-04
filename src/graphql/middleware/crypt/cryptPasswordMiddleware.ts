import { Request } from "express";
import bcrypt from "bcrypt";
import { MiddlewareFn } from "type-graphql";

type TYoutuberData = {
  userType: string;
  name: string;
  email: string;
  password: string;
};

interface IYoutuberDataVariables {
  suffix: string;
  signupYoutuberData: TYoutuberData;
}

interface ISignup extends Request {
  body: {
    variables: IYoutuberDataVariables;
  };
}

export interface IContext {
  req: ISignup;
}

export const cryptPasswordMiddleware: MiddlewareFn<IContext> = (
  { context: { req } },
  next
): any => {
  const signupYoutuberDataKey: keyof IYoutuberDataVariables =
    "signupYoutuberData";

  const suffix = req.body.variables.suffix;

  const userPassword =
    req.body.variables[`signup${suffix}Data` as typeof signupYoutuberDataKey]
      .password;

  if (userPassword) {
    bcrypt.genSalt(8, (_, salt) => {
      bcrypt.hash(userPassword, salt, (_, hash) => {
        req.body.variables[
          `signup${suffix}Data` as typeof signupYoutuberDataKey
        ].password = hash;
        return next();
      });
    });
  } else {
    return next();
  }
};
