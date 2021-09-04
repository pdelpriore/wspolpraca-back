import { ObjectType, Field, ID } from "type-graphql";
import { YoutuberType } from "../user/YoutuberType";
import { BrandType } from "../user/BrandType";

@ObjectType()
export class CommentType {
  @Field(() => ID)
  id!: string;

  @Field()
  user!: YoutuberType | BrandType;

  @Field()
  content!: string;

  @Field()
  date!: Date;
}
