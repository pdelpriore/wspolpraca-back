import { initializeApp, credential, ServiceAccount } from "firebase-admin";
import cooperationAccount from "../../../cooperation.json";

const firebaseAdmin = initializeApp({
  credential: credential.cert(cooperationAccount as ServiceAccount),
});

export default firebaseAdmin;
