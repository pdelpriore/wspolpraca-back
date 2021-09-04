import { ObjectType, Field, ID } from "type-graphql";
import { YoutuberType } from "../user/YoutuberType";
import { BrandType } from "../user/BrandType";

@ObjectType()
export class RateType {
  @Field(() => ID)
  id!: string;

  @Field(() => YoutuberType || BrandType)
  user!: YoutuberType | BrandType;

  @Field()
  value!: number;
}
