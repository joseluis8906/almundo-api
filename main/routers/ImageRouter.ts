import express, { Application } from "express";
import path from "path";

export default class ImageRouter {
  private endPoint: string;

  constructor(app: Application, version: string) {
    this.endPoint = `/static`;

    app.use(this.endPoint, express.static(path.join(__dirname, "../contrib/assets")));
  }
}
