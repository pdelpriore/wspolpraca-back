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

const BaseUserSignupResolver = <
  T extends ClassType,
  X extends Model<IYoutuber>,
  Y extends Model<IBrand>
>(
  suffix: string,
  returnType: T,
  inputType: T,
  Entity: X | Y,
  middleware?: Middleware<any>[]
) => {
  @Resolver()
  class BaseSignupResolver {
    @Mutation(() => returnType, { name: `signup${suffix}` })
    @UseMiddleware(...(middleware || []))
    async create(@Arg("data", () => inputType) data: YoutuberInputType) {
      const entity = new Entity(data);
      await entity.save();

      return entity;
    }
  }
  return BaseSignupResolver;
};

export default BaseUserSignupResolver;
