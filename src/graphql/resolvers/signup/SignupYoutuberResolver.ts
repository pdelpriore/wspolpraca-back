import BaseSignupUserResolver from "../../shared/BaseUserSignupResolver";
import { YoutuberType } from "../../entities/user/Youtuber";
import { YoutuberInputType } from "../../inputs/youtuber/YoutuberInput";
import Youtuber from "../../../model/user/Youtuber";

export const SignupYoutuberResolver = BaseSignupUserResolver(
  "Youtuber",
  YoutuberType,
  YoutuberInputType,
  Youtuber
);
