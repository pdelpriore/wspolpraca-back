import express, { Application } from "express";
import startServer from "./methods/startServer";
import dbConnection from "./config/db/dbConnection";
import cors from "cors";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

startServer(app, dbConnection, []);
