import { ObjectType, Field, ID } from "type-graphql";
import { BrandType } from "../user/BrandType";
import { CommentType } from "../rate/CommentType";
import { RateType } from "../rate/RateType";

@ObjectType()
export class CommentsYoutuberType {
  @Field(() => ID)
  id!: string;

  @Field()
  commentator!: BrandType;

  @Field()
  comment!: CommentType;

  @Field()
  rate!: RateType;
}
