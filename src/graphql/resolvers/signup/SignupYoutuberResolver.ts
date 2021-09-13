import BaseSignupUserResolver from "../../shared/BaseUserSignupResolver";
import { YoutuberType } from "../../entities/user/YoutuberType";
import { YoutuberInputType } from "../../inputs/youtuber/YoutuberInput";
import Youtuber from "../../../model/user/Youtuber";
import firebaseAuth from "../../middleware/userAuth/firebaseAuth";

export const SignupYoutuberResolver = BaseSignupUserResolver(
  "Youtuber",
  YoutuberType,
  YoutuberInputType,
  Youtuber,
  [firebaseAuth]
);
