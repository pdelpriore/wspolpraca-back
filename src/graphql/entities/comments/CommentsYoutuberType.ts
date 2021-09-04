import { ObjectType, Field, ID } from "type-graphql";
import { BrandType } from "../user/BrandType";
import { CommentType } from "../rate/CommentType";
import { RateType } from "../rate/RateType";

@ObjectType()
export class CommentsYoutuberType {
  @Field(() => ID)
  id!: string;

  @Field(() => BrandType)
  commentator!: BrandType;

  @Field(() => CommentType)
  comment!: CommentType;

  @Field(() => RateType)
  rate!: RateType;
}
