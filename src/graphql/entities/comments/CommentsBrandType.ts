import { ObjectType, Field, ID } from "type-graphql";
import { YoutuberType } from "../user/YoutuberType";
import { CommentType } from "../rate/CommentType";
import { RateType } from "../rate/RateType";

@ObjectType()
export class CommentsBrandType {
  @Field(() => ID)
  id!: string;

  @Field(() => YoutuberType)
  commentator!: YoutuberType;

  @Field(() => CommentType)
  comment!: CommentType;

  @Field(() => RateType)
  rate!: RateType;
}
