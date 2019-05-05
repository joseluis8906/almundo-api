import { Application } from "express";
import HomeRouter from "@app/routers/HomeRouter"
import HotelRouter from "@app/routers/HotelRouter";
import ImageRouter from "@app/routers/ImageRouter";

export default class RootRouter {
  private version: string;

  constructor(app: Application) {
    this.version = "/api/v1"
    
    new HomeRouter(app, this.version);
    new HotelRouter(app, this.version);
    new ImageRouter(app, this.version);
  }
}
