import { Application } from "express";
import HomeRouter from "@app/routers/HomeRouter"

export default class RootRouter {
  private version: string;

  constructor(app: Application) {
    this.version = "/api/v1"
    
    new HomeRouter(app, this.version);
  }
}
