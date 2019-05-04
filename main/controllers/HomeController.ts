import { Request, Response } from "express";

export default class HomeController {

  public home(req: Request, res: Response): void {
    res.send("almundo api");
  }
  
}
