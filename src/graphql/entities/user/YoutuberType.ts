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

  @Field()
  photo?: string;

  @Field()
  isEmailConfirmed!: boolean;

  @Field()
  category?: string;

  @Field()
  youtubeUrl?: string;

  @Field()
  channelBornDate?: Date;

  @Field()
  subscribersQuantity?: number;

  @Field()
  meanViewsNumberPerVideo?: number;

  @Field()
  meanSubscribersAge?: number;

  @Field()
  subscriberMaleSexQuantity?: number;

  @Field()
  subscriberFemaleSexQuantity?: number;

  @Field()
  meanLikesNumberPerVideo?: number;

  @Field()
  meanCommentsNumberPerVideo?: number;

  @Field()
  creationDate!: Date;

  @Field(() => [CommentsYoutuberType])
  comments?: CommentsYoutuberType[];

  @Field(() => [BrandType])
  companiesInCooperation?: BrandType[];

  @Field(() => [MessageType])
  messages?: MessageType[];
}
