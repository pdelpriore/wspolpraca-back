import BaseSignupUserResolver from "../BaseSignupUserResolver";
import { YoutuberEntity } from "../../../entities/user/Youtuber";
import { YoutuberInputType } from "./YoutuberInputType";
import Youtuber from "../../../../model/user/Youtuber";

export const SignupYoutuberResolver = BaseSignupUserResolver(
  "Youtuber",
  YoutuberEntity,
  YoutuberInputType,
  Youtuber
);
