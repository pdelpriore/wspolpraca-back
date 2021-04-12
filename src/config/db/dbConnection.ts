import mongoose from "mongoose";
import { capitalizeFirst } from "../../methods/capitalize";

const dbConnection = (): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      mongoose.set("useFindAndModify", false);

      const dbConnected = await mongoose.connect(
        "mongodb://localhost:27017/cooperation",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      if (dbConnected)
        resolve(capitalizeFirst("Successfuly connected to database"));
    } catch (err) {
      if (err) reject(err);
    }
  });
};

export default dbConnection;
