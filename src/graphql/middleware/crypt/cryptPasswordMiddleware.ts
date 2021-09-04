import bcrypt from "bcrypt";
import { MiddlewareFn } from "type-graphql";
import { IContext, IUserDataVariables } from "../type/SignupMiddlewareContext";

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
