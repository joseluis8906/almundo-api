import Hotel from "@app/models/Hotel";
import HotelBusiness from "@app/contrib/business/HotelBusiness";

export default class HotelQueryFilter {
  private page: number = 1;
  private name: string | null = null;
  private amenities: Array<string> | null = null;
  private stars: number | null;
  private hotels: Array<Hotel>;
  private business: HotelBusiness;

  constructor(page: number | null, name: string | null, amenities: Array<string> | null, stars: number | null) {
    this.page = page ? page : 1;
    this.name = name;
    this.amenities = amenities;
    this.stars = stars;

    this.business = new HotelBusiness();
    this.hotels = this.business.listAll();
  }

  public resolve(): Array<Hotel> {
    this.resolveForStars();
    this.resolveForAmenities();
    this.resolveForName();
    this.resolveForPage();
    return this.hotels;
  }

  private resolveForName(): void {
    if (this.name) {
      this.hotels = this.business.filterByName(this.name);
    }
  }

  private resolveForStars(): void {
    if (this.stars) {
      this.hotels = this.business.filterByStars(this.stars);
    }
  }

  private resolveForAmenities(): void {
    if (this.amenities) {
      this.hotels = this.business.filterByAmenities(this.amenities);
    }
  }

  private resolveForPage(): void {
    --this.page;
    const pageSize = 10;
    this.hotels = this.hotels.slice(this.page * pageSize, (this.page + 1) * pageSize);
  }
 }
