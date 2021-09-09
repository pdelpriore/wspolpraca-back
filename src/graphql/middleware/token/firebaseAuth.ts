import { MiddlewareFn } from "type-graphql";
import firebaseAdmin from "../../../config/firebase/FirebaseAdmin";
import { IContext } from "../../context/Context";

export const firebaseAuth: MiddlewareFn<IContext> = async (
  { context: { req } },
  next
) => {
  try {
    const tokenId = req.get("x-auth");

    if (tokenId) {
      const result = await firebaseAdmin.auth().verifyIdToken(tokenId);
      return result && next();
    }
  } catch (err) {
    console.log(err);
  }
};
