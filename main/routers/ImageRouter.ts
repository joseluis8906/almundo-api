import { Application } from "express";
import ImageController from "@app/controllers/ImageController";

export default class ImageRouter {
  private endPoint: string;
  private controller: ImageController;

  constructor(app: Application, version: string) {
    this.endPoint = `${version}/images`;
    this.controller = new ImageController();

    app.route(this.endPoint).get(this.controller.findOne.bind(this.controller));
  }
}
