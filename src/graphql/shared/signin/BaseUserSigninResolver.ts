import {
  Resolver,
  Mutation,
  Arg,
  Ctx,
  ClassType,
  UseMiddleware,
} from "type-graphql";
import { IYoutuber } from "../../../model/user/Youtuber";
import { IBrand } from "../../../model/user/Brand";
import { SigninUserInputType } from "../../inputs/signin/SigninUserInput";
import { Model } from "mongoose";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { IContext } from "../../context/Context";

const BaseUserSigninResolver = (
  suffix: string,
  returnType: ClassType,
  inputType: ClassType,
  Entity: Model<IYoutuber> | Model<IBrand>,
  middleware?: Middleware<IContext>[]
) => {
  @Resolver()
  class BaseSigninResolver {
    @Mutation(() => returnType, { name: `signin${suffix}` })
    @UseMiddleware(...(middleware || []))
    async signin(
      @Arg("data", () => inputType) data: SigninUserInputType,
      @Ctx() { req, res }: IContext
    ) {
      const user = await Entity.findOne({ email: data.email });

      if (user) {
        return user;
      }
    }
  }
  return BaseSigninResolver;
};

export default BaseUserSigninResolver;
