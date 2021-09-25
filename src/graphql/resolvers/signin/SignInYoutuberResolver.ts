import BaseSigninUserResolver from "../../shared/signin/BaseUserSigninResolver";
import { YoutuberType } from "../../entities/user/YoutuberType";
import { SigninUserInputType } from "../../inputs/signin/SigninUserInput";
import Youtuber from "../../../model/user/Youtuber";
import firebaseAuth from "../../middleware/userAuth/firebaseAuth";

export const SigninYoutuberResolver = BaseSigninUserResolver(
  "Youtuber",
  YoutuberType,
  SigninUserInputType,
  Youtuber,
  [firebaseAuth]
);
