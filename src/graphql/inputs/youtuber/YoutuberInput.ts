import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class YoutuberInputType {
  @Field()
  userType!: string;

  @Field()
  @Length(6, 255)
  name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}
