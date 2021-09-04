import { Request } from "express";
import bcrypt from "bcrypt";
import { MiddlewareFn } from "type-graphql";

type TYoutuberData = {
  userType: string;
  name: string;
  email: string;
  password: string;
};

interface IUserDataVariables {
  userSuffix: string;
  signupUserData: TYoutuberData;
}

interface ISignup extends Request {
  body: {
    variables: IUserDataVariables;
  };
}

interface IContext {
  req: ISignup;
}

export const cryptPasswordMiddleware: MiddlewareFn<IContext> = (
  { context: { req } },
  next
): any => {
  const signupUserDataKey: keyof IUserDataVariables = "signupUserData";

  const userSuffix = req.body.variables.userSuffix;

  const userPassword =
    req.body.variables[`signup${userSuffix}Data` as typeof signupUserDataKey]
      .password;

  if (userPassword) {
    bcrypt.genSalt(8, (_, salt) => {
      bcrypt.hash(userPassword, salt, (_, hash) => {
        req.body.variables[
          `signup${userSuffix}Data` as typeof signupUserDataKey
        ].password = hash;
        return next();
      });
    });
  } else {
    return next();
  }
};
