import { Request, Response } from "express";
import HotelQueryFilter from "@app/contrib/utils/HotelQueryFilter";
import HotelBusiness from "@app/contrib/business/HotelBusiness";

export default class HotelController {

  public list(req: Request, res: Response): void {
    const page: number | null = req.query.page ? Number(req.query.page) : null;
    const name: string | null = req.query.name ? req.query.name : null;
    const amenities: Array<string> | null = req.query.amenities ? req.query.amenities.split(",") : null;
    const stars: number | null = req.query.stars ? Number(req.query.stars) : null;
    res.json(
      new HotelQueryFilter(page, name, amenities, stars)
        .resolve());
  }

  public findOne(req: Request, res: Response): void {
    res.json(new HotelBusiness().findOne(req.params.id));
  }
  
}
