import BaseSignupUserResolver from "../../shared/BaseUserSignupResolver";
import { YoutuberType } from "../../entities/user/YoutuberType";
import { YoutuberInputType } from "../../inputs/youtuber/YoutuberInput";
import Youtuber from "../../../model/user/Youtuber";
import { verifyTokenIdMiddleware } from "../../middleware/token/VerifyTokenIdMiddleware";

export const SignupYoutuberResolver = BaseSignupUserResolver(
  "Youtuber",
  YoutuberType,
  YoutuberInputType,
  Youtuber,
  [verifyTokenIdMiddleware]
);
