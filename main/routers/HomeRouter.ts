import { Application } from "express";
import HomeController from "@app/controllers/HomeController";

export default class HomeRouter {
  private endPoint: string;
  private controller: HomeController;
  
  constructor(app: Application, version: string) {
    this.endPoint = `/`;
    this.controller = new HomeController();

    app.route(this.endPoint).get(this.controller.home.bind(this));
  }
}
