import { initializeApp, credential } from "firebase-admin";
import path from "path";

const cooperationAccount = require(path.join(
  __dirname,
  "..",
  "..",
  "..",
  "cooperation.json"
));

const firebaseAdmin = initializeApp({
  credential: credential.cert(cooperationAccount),
});

export default firebaseAdmin;
