import { ObjectType, Field, ID, Float, Int } from "type-graphql";
import { CommentsYoutuberType } from "../comments/CommentsYoutuberType";
import { BrandType } from "./BrandType";
import { MessageType } from "../message/MessageType";

@ObjectType()
export class YoutuberType {
  @Field(() => ID)
  id!: string;

  @Field()
  userType!: string;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  photo?: string;

  @Field()
  isEmailConfirmed!: boolean;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  youtubeUrl?: string;

  @Field({ nullable: true })
  channelBornDate?: Date;

  @Field(() => Int, { nullable: true })
  subscribersQuantity?: number;

  @Field(() => Float, { nullable: true })
  meanViewsNumberPerVideo?: number;

  @Field(() => Float, { nullable: true })
  meanSubscribersAge?: number;

  @Field(() => Int, { nullable: true })
  subscriberMaleSexQuantity?: number;

  @Field(() => Int, { nullable: true })
  subscriberFemaleSexQuantity?: number;

  @Field(() => Float, { nullable: true })
  meanLikesNumberPerVideo?: number;

  @Field(() => Float, { nullable: true })
  meanCommentsNumberPerVideo?: number;

  @Field()
  creationDate!: Date;

  @Field(() => [CommentsYoutuberType], { nullable: true })
  comments?: CommentsYoutuberType[];

  @Field(() => [BrandType], { nullable: true })
  companiesInCooperation?: BrandType[];

  @Field(() => [MessageType], { nullable: true })
  messages?: MessageType[];
}
