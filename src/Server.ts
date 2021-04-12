import express, { Application } from "express";
import dbConnection from "./config/db/dbConnection";
import cors from "cors";
import { capitalizeFirst } from "./methods/capitalize";

const port = process.env.PORT || 4000;

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const startServer = async () => {
  try {
    const dbStatus = await dbConnection();
    console.log(dbStatus);

    app.listen(port, () => console.log(capitalizeFirst("Server is running")));
  } catch (err) {
    if (err) console.log(err);
  }
};

startServer();
