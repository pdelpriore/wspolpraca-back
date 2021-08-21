import express, { Application } from "express";
import dbConnection from "./config/db/dbConnection";
import routes from "./route/RouteIndex";
import cors from "cors";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const runServer = async () => {
  const port = process.env.PORT || 4000;

  try {
    const dbStatus: string = await dbConnection();
    console.log(dbStatus);

    routes.length > 0 && routes.forEach((route) => route(app));

    app.listen(port, () => console.log("Server is running"));
  } catch (err) {
    if (err) console.log(err);
  }
};

runServer();
