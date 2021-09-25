import {
  Resolver,
  Mutation,
  Arg,
  ClassType,
  UseMiddleware,
} from "type-graphql";
import { IYoutuber } from "../../../model/user/Youtuber";
import { IBrand } from "../../../model/user/Brand";
import { SignupUserInputType } from "../../inputs/signup/SignupUserInput";
import { Model } from "mongoose";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { IContext } from "../../context/Context";

const BaseUserSignupResolver = (
  suffix: string,
  returnType: ClassType,
  inputType: ClassType,
  Entity: Model<IYoutuber> | Model<IBrand>,
  middleware?: Middleware<IContext>[]
) => {
  @Resolver()
  class BaseSignupResolver {
    @Mutation(() => returnType, { name: `signup${suffix}` })
    @UseMiddleware(...(middleware || []))
    async signup(@Arg("data", () => inputType) data: SignupUserInputType) {
      const entity = new Entity(data);
      await entity.save();

      return entity;
    }
  }
  return BaseSignupResolver;
};

export default BaseUserSignupResolver;
