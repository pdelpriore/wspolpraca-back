import { InputType, Field, Int, Float } from "type-graphql";
import { Length, MinLength } from "class-validator";

@InputType()
export class SignupUserInputType {
  @Field()
  userType!: string;

  @Field()
  @MinLength(3)
  name!: string;

  @Field()
  email!: string;

  @Field({ nullable: true })
  picture?: string;
}
