import { ObjectType, Field, ID } from "type-graphql";
import Youtuber, { IYoutuber, comment } from "../../model/user/Youtuber";
import Brand, { IBrand } from "../../model/user/Brand";
import Rate, { IRate } from "../../model/rate/Rate";
import Comment, { IComment } from "../../model/rate/Comment";
import Message, { IMessage } from "../../model/message/Message";
import Conversation, { IConversation } from "../../model/message/Conversation";

@ObjectType()
export class YoutuberType {
  @Field((type) => ID)
  _id!: string;

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

  @Field()
  category!: string;

  @Field()
  youtubeUrl!: string;

  @Field()
  channelBornDate!: Date;

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

  @Field((type) => [{ Brand, Comment, Rate }], { nullable: true })
  comments?: comment[];

  @Field((type) => [Brand], { nullable: true })
  companiesInCooperation?: IBrand[];

  @Field((type) => [Message], { nullable: true })
  messages?: IMessage[];
}
