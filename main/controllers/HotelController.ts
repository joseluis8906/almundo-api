import { Request, Response } from "express";

export default class HotelController {

  public listAll(req: Request, res: Response): void {
    res.json([]);
  }

  public findOne(req: Request, res: Response): void {
    res.json({});
  }
  
}
