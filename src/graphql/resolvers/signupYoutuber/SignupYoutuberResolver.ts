import BaseSignupUserResolver from "../../shared/BaseUserSignupResolver";
import { YoutuberEntity } from "../../entities/user/Youtuber";
import { YoutuberInputType } from "../../inputs/youtuber/YoutuberInput";
import Youtuber from "../../../model/user/Youtuber";

export const SignupYoutuberResolver = BaseSignupUserResolver(
  "Youtuber",
  YoutuberEntity,
  YoutuberInputType,
  Youtuber
);
