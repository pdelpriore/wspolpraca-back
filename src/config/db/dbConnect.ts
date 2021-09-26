import mongoose from "mongoose";

const dbConnect = (): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      mongoose.set("useFindAndModify", false);

      const dbConnected = await mongoose.connect(
        process.env.MONGO_DB_URL as string,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      if (dbConnected) resolve("Successfuly connected to database");
    } catch (err) {
      if (err) reject(err);
    }
  });
};

export default dbConnect;
