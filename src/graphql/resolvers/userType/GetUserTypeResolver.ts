import { Query, Arg, Resolver, UseMiddleware } from "type-graphql";
import firebaseAuth from "../../middleware/userAuth/firebaseAuth";
import { YoutuberType } from "../../entities/user/YoutuberType";
import { BrandType } from "../../entities/user/BrandType";
import Youtuber from "../../../model/user/Youtuber";
import Brand from "../../../model/user/Brand";

@Resolver()
export class GetUserTypeResolver {
  @Query(() => YoutuberType || BrandType)
  @UseMiddleware([firebaseAuth])
  async getUserType(@Arg("email") email: string) {
    const youtuber = await Youtuber.findOne({ email: email });

    if (youtuber) {
      return youtuber;
    } else {
      const brand = await Brand.findOne({ email: email });
      return brand;
    }
  }
}
