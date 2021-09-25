import BaseSignupUserResolver from "../../shared/signup/BaseUserSignupResolver";
import { YoutuberType } from "../../entities/user/YoutuberType";
import { SignupUserInputType } from "../../inputs/signup/SignupUserInput";
import Youtuber from "../../../model/user/Youtuber";
import firebaseAuth from "../../middleware/userAuth/firebaseAuth";

export const SignupYoutuberResolver = BaseSignupUserResolver(
  "Youtuber",
  YoutuberType,
  SignupUserInputType,
  Youtuber,
  [firebaseAuth]
);
