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

  @Field()
  password!: string;

  @Field()
  logo?: string;

  @Field()
  isEmailConfirmed!: boolean;

  @Field()
  category?: string;

  @Field()
  siteUrl?: string;

  @Field()
  brandBornDate?: Date;

  @Field()
  creationDate!: Date;

  @Field(() => [CommentsBrandType])
  comments?: CommentsBrandType[];

  @Field(() => [YoutuberType])
  youtubersInCooperation?: YoutuberType[];

  @Field(() => [MessageType])
  messages?: MessageType[];
}
