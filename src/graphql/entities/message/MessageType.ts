import { ObjectType, Field, ID } from "type-graphql";
import { YoutuberType } from "../user/YoutuberType";
import { BrandType } from "../user/BrandType";
import { ConversationType } from "./ConversationType";

@ObjectType()
export class MessageType {
  @Field(() => ID)
  id!: string;

  @Field(() => YoutuberType)
  youtuber!: YoutuberType;

  @Field(() => BrandType)
  brand!: BrandType;

  @Field({ nullable: true })
  isRead?: boolean;

  @Field()
  date!: Date;

  @Field(() => [ConversationType], { nullable: true })
  conversations?: ConversationType[];
}
