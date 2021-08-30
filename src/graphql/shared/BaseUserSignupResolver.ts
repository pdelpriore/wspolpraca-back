import { Resolver, Mutation, Arg, ClassType } from "type-graphql";
import { IYoutuber } from "../../model/user/Youtuber";
import { IBrand } from "../../model/user/Brand";
import { YoutuberInputType } from "../inputs/youtuber/YoutuberInput";
import { Model } from "mongoose";

const BaseUserSignupResolver = <
  T extends ClassType,
  X extends Model<IYoutuber>,
  Y extends Model<IBrand>
>(
  suffix: string,
  returnType: T,
  inputType: T,
  Entity: X | Y
) => {
  @Resolver()
  class BaseSignupResolver {
    @Mutation(() => returnType, { name: `signup${suffix}` })
    // TODO:
    // add UseMiddleware for password crypt
    async create(@Arg("data", () => inputType) data: YoutuberInputType) {
      const entity = new Entity(data);
      await entity.save();

      return entity;
    }
  }
  return BaseSignupResolver;
};

export default BaseUserSignupResolver;
