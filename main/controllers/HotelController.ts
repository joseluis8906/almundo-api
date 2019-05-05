import { Request, Response } from "express";
import HotelQueryFilter from "@app/contrib/utils/HotelQueryFilter";
import HotelBusiness from "@app/contrib/business/HotelBusiness";

export default class HotelController {

  public list(req: Request, res: Response): void {
    const amenities = req.query.amenities ? req.query.amenities.split(",") : null;
    res.json(
      new HotelQueryFilter(req.query.page, req.query.name, amenities)
        .resolve());
  }

  public findOne(req: Request, res: Response): void {
    res.json(new HotelBusiness().findOne(req.params.id));
  }
  
}
