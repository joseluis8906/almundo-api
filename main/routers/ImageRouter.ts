import express, { Application } from "express";

export default class ImageRouter {
  private endPoint: string;

  constructor(app: Application, version: string) {
    this.endPoint = `/static`;

    app.use(this.endPoint, express.static("/app/dist/contrib/assets"));
  }
}
