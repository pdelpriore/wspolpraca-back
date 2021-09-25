import {
  Resolver,
  Mutation,
  Arg,
  Ctx,
  ClassType,
  UseMiddleware,
} from "type-graphql";
import { IYoutuber } from "../../../model/user/Youtuber";
import { IBrand } from "../../../model/user/Brand";
import { SigninUserInputType } from "../../inputs/signin/SigninUserInput";
import { Model } from "mongoose";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { IContext } from "../../context/Context";
import firebaseAdmin from "../../../config/firebase/FirebaseAdmin";

const BaseUserSigninResolver = (
  suffix: string,
  returnType: ClassType,
  inputType: ClassType,
  Entity: Model<IYoutuber> | Model<IBrand>,
  middleware?: Middleware<IContext>[]
) => {
  @Resolver()
  class BaseSigninResolver {
    @Mutation(() => returnType, { name: `signin${suffix}` })
    @UseMiddleware(...(middleware || []))
    async signin(
      @Arg("data", () => inputType) data: SigninUserInputType,
      @Ctx() { req, res }: IContext
    ) {
      const user = await Entity.findOne({ email: data.email });

      if (user) {
        const tokenId = req.get("x-auth");

        const expiresIn = 60 * 60 * 24 * 5 * 1000;
        const sessionCookie = await firebaseAdmin
          .auth()
          .createSessionCookie(tokenId as string, { expiresIn });

        const options = { maxAge: expiresIn, httpOnly: true, secure: false };
        res.cookie("session", sessionCookie, options);

        return user;
      }
    }
  }
  return BaseSigninResolver;
};

export default BaseUserSigninResolver;
