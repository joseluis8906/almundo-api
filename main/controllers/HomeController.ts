import { Request, Response } from "express";

export default class HomeController {

  public index(req: Request, res: Response): void {
    res.send("almundo api");
  }
  
}
