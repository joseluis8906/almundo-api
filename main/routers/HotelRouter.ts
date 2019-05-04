import { Application } from "express";
import HotelController from "@app/controllers/HotelController";

export default class HotelRouter{
  private endPoint: string;
  private controller: HotelController;

  constructor(app: Application, version: string) {
    this.endPoint = `${version}/hotels`;
    this.controller = new HotelController();

    app.route(this.endPoint).get(this.controller.listAll.bind(this.controller));
    app.route(`${this.endPoint}/:id`).get(this.controller.findOne.bind(this.controller));
  }
}