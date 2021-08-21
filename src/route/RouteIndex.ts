import { Application } from "express";

type TRouteFn = (app: Application) => void;

const routes: TRouteFn[] = [];

export default routes;
