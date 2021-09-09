import * as admin from "firebase-admin";
import path from "path";

const cooperationAccount = require(path.join(
  __dirname,
  "..",
  "..",
  "..",
  "cooperation.json"
));

const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(cooperationAccount),
});

export default firebaseAdmin;
