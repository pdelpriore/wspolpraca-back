import { Query, Resolver } from "type-graphql";

@Resolver()
export class TestQueryResolver {
  @Query(() => String)
  async recipes() {
    return "Hello World !";
  }
}
