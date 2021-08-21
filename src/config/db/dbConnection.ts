import mongoose from "mongoose";

const dbConnection = (): Promise<void> => {
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
      if (dbConnected) {
        console.log("Successfuly connected to database");
        resolve();
      }
    } catch (err) {
      if (err) reject();
    }
  });
};

export default dbConnection;
