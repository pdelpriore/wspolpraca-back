import {
  Resolver,
  Mutation,
  Arg,
  ClassType,
  UseMiddleware,
} from "type-graphql";
import { IYoutuber } from "../../model/user/Youtuber";
import { IBrand } from "../../model/user/Brand";
import { YoutuberInputType } from "../inputs/youtuber/YoutuberInput";
import { Model } from "mongoose";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { IContext } from "../context/Context";

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
    async create(@Arg("data", () => inputType) data: YoutuberInputType) {
      const entity = new Entity({ ...data, isEmailConfirmed: false });
      await entity.save();

      return entity;
    }
  }
  return BaseSignupResolver;
};

export default BaseUserSignupResolver;
