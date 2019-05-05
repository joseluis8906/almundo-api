import Hotel from "@app/models/Hotel";
import HotelBusiness from "@app/contrib/business/HotelBusiness";

export default class HotelQueryFilter {
  private page: number = 1;
  private name: string | null = null;
  private amenities: Array<string> | null = null;
  private hotels: Array<Hotel>;
  private business: HotelBusiness;

  constructor(page: number, name: string, amenities: Array<string> | null) {
    this.page = page | 1;
    this.name = name;
    this.amenities = amenities;

    this.business = new HotelBusiness();
    this.hotels = this.business.listAll();
  }

  public resolve(): Array<Hotel> {
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
