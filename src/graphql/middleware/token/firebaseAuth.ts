import { MiddlewareFn } from "type-graphql";
import { IContext } from "../../context/Context";

export const firebaseAuth: MiddlewareFn<IContext> = (
  { context: { req } },
  next
) => {
  const tokenId = req.get("x-auth");
  console.log(tokenId);
  return next();
};
