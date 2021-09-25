import { MiddlewareFn } from "type-graphql";
import firebaseAdmin from "../../../config/firebase/FirebaseAdmin";
import { IContext } from "../../context/Context";

const userAuth: MiddlewareFn<IContext> = async ({ context: { req } }, next) => {
  try {
    const sessionCookie = req.cookies.session;

    if (sessionCookie) {
      const result = await firebaseAdmin
        .auth()
        .verifySessionCookie(sessionCookie, true);
      return result && next();
    }
  } catch (err) {
    console.log(err);
  }
};

export default userAuth;
