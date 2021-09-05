import { MiddlewareFn } from "type-graphql";
import { IContext } from "../../context/Context";

export const verifyTokenIdMiddleware: MiddlewareFn<IContext> = (
  { context: { req } },
  next
): any => {
  const tokenId = req.get("x-auth");
  console.log(tokenId);
  return next();
};
