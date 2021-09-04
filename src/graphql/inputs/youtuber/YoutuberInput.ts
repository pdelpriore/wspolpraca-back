import { InputType, Field, Int, Float } from "type-graphql";
import { Length, MinLength } from "class-validator";
import { CommentsYoutuberType } from "../../entities/comments/CommentsYoutuberType";
import { BrandType } from "../../entities/user/BrandType";
import { MessageType } from "../../entities/message/MessageType";

@InputType()
export class YoutuberInputType {
  @Field()
  userType!: string;

  @Field()
  @MinLength(3)
  name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field({ nullable: true })
  photo?: string;

  @Field({ nullable: true })
  isEmailConfirmed?: boolean;

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

  @Field({ nullable: true })
  creationDate?: Date;

  @Field(() => [CommentsYoutuberType], { nullable: true })
  comments?: CommentsYoutuberType[];

  @Field(() => [BrandType], { nullable: true })
  companiesInCooperation?: BrandType[];

  @Field(() => [MessageType], { nullable: true })
  messages?: MessageType[];
}
