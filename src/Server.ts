import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import express, { Application } from "express";
import path from "path";
import dbConnect from "./config/db/dbConnect";
import routes from "./route/RouteIndex";
import { IContext } from "./graphql/context/Context";

const app: Application = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const runServer = async () => {
  const port = process.env.PORT;

  const corsOptions = {
    credentials: true,
    origin: process.env.ORIGIN_URL,
  };

  try {
    const dbConnectionStatus = await dbConnect();
    console.log(dbConnectionStatus);

    routes.length > 0 && routes.forEach((route) => route(app));

    const schema = await buildSchema({
      resolvers: [path.join(__dirname, "graphql", "resolvers", "**", "*.ts")],
    });

    const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }: IContext) => ({ req, res }),
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app, cors: corsOptions });

    app.listen(port, () => console.log("Server is running"));
  } catch (err) {
    if (err) console.log(err);
  }
};

runServer();
