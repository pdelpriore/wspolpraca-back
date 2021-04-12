import express, { Application } from "express";
import runServer from "./methods/runServer";
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

runServer(app, dbConnection, []);
