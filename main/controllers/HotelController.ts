import { Request, Response } from "express";

export default class HotelController {

  public list(req: Request, res: Response): void {
    res.send("list");
  }

  public findOne(req: Request, res: Response): void {
    res.json({});
  }
  
}
