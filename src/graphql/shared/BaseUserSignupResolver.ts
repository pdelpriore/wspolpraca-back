import { Resolver, Mutation, Arg, ClassType } from "type-graphql";
import { IYoutuber } from "../../model/user/Youtuber";
import { IBrand } from "../../model/user/Brand";
import { Model } from "mongoose";

const BaseUserSignupResolver = <
  T extends ClassType,
  Y extends Model<IYoutuber>,
  B extends Model<IBrand>
>(
  suffix: string,
  returnType: T,
  inputType: T,
  Entity: Y | B
) => {
  @Resolver()
  class BaseSignupResolver {
    @Mutation(() => returnType, { name: `signup${suffix}` })
    // TODO:
    // add UseMiddleware for password crypt
    async create(@Arg("data", () => inputType) data: any) {
      const entity = new Entity(data);
      await entity.save();

      return entity;
    }
  }
  return BaseSignupResolver;
};

export default BaseUserSignupResolver;
