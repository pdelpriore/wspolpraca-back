import { ObjectType, Field, ID } from "type-graphql";
import { MessageType } from "./MessageType";
import { YoutuberType } from "../user/YoutuberType";
import { BrandType } from "../user/BrandType";

@ObjectType()
export class ConversationType {
  @Field(() => ID)
  id!: string;

  @Field()
  message!: MessageType;

  @Field()
  author!: YoutuberType | BrandType;

  @Field()
  content!: string;

  @Field()
  date!: Date;
}
