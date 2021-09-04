import { ObjectType, Field, ID } from "type-graphql";
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

  @Field()
  password!: string;

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

  @Field({ nullable: true })
  subscribersQuantity?: number;

  @Field({ nullable: true })
  meanViewsNumberPerVideo?: number;

  @Field({ nullable: true })
  meanSubscribersAge?: number;

  @Field({ nullable: true })
  subscriberMaleSexQuantity?: number;

  @Field({ nullable: true })
  subscriberFemaleSexQuantity?: number;

  @Field({ nullable: true })
  meanLikesNumberPerVideo?: number;

  @Field({ nullable: true })
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
