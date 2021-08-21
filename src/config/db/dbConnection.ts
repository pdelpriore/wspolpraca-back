import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    mongoose.set("useFindAndModify", false);

    const dbConnected = await mongoose.connect(
      "mongodb://localhost:27017/cooperation",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    if (dbConnected) console.log("Successfuly connected to database");
  } catch (err) {
    if (err) console.log(err);
  }
};

export default dbConnection;
