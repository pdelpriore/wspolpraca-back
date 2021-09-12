import { ObjectType, Field, ID } from "type-graphql";
import { CommentsBrandType } from "../comments/CommentsBrandType";
import { YoutuberType } from "./YoutuberType";
import { MessageType } from "../message/MessageType";

@ObjectType()
export class BrandType {
  @Field(() => ID)
  id!: string;

  @Field()
  userType!: string;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field({ nullable: true })
  logo?: string;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  siteUrl?: string;

  @Field({ nullable: true })
  brandBornDate?: Date;

  @Field()
  creationDate!: Date;

  @Field(() => [CommentsBrandType], { nullable: true })
  comments?: CommentsBrandType[];

  @Field(() => [YoutuberType], { nullable: true })
  youtubersInCooperation?: YoutuberType[];

  @Field(() => [MessageType], { nullable: true })
  messages?: MessageType[];
}
