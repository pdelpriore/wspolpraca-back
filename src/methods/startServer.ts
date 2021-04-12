import { Application } from "express";
import { capitalizeFirst } from "./capitalize";

type TDbConnect = () => Promise<string>;
type TRouteFn = (app: Application) => void;
type TRoutes = TRouteFn[];

const startServer = async (
  app: Application,
  dbConnection: TDbConnect,
  routes: TRoutes
) => {
  const port = process.env.PORT || 4000;

  try {
    const dbStatus = await dbConnection();
    console.log(dbStatus);

    routes.length > 0 && routes.forEach((route) => route(app));

    app.listen(port, () => console.log(capitalizeFirst("Server is running")));
  } catch (err) {
    if (err) console.log(err);
  }
};

export default startServer;
