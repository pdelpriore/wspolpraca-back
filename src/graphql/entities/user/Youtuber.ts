import { ObjectType, Field, ID } from "type-graphql";

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
}
