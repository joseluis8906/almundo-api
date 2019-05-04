import { Request, Response } from "express";

export default class ImageController {
  
  public findOne(req: Request, res: Response) {
    res.send("image");
  }

}
