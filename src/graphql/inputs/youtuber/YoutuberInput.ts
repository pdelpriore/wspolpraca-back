import { InputType, Field, Int, Float } from "type-graphql";
import { Length, MinLength } from "class-validator";

@InputType()
export class YoutuberInputType {
  @Field()
  userType!: string;

  @Field()
  @MinLength(3)
  name!: string;

  @Field()
  email!: string;

  @Field({ nullable: true })
  picture?: string;

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
}
