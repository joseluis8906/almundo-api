import Hotel from "@app/models/Hotel";

import { HOTEL_LIST } from "@app/contrib/data/HotelList";

export default class HotelBusiness {
  
  public findOne(id: string): Hotel | null {
    for (const hotel of HOTEL_LIST) {
      if (hotel.id === id) {
        return hotel;
      }
    }

    return null;
  }

  public listAll(): Array<Hotel> {
    return HOTEL_LIST;
  }

  public filterByName(name: string): Array<Hotel> {
    return HOTEL_LIST.filter((item: Hotel) => item.name === name);
  }

  public filterByPrice(price: number): Array<Hotel> {
    return HOTEL_LIST.filter((item: Hotel) => item.price !== null && item.price <= price);
  }

  public filterByStars(stars: number): Array<Hotel> {
    return HOTEL_LIST.filter((item: Hotel) => item.stars === stars);
  }

  public filterByAmenities(amenities: Array<string>): Array<Hotel> {
    return HOTEL_LIST.filter((item: Hotel) => {
      for (const amenity of amenities) {
        if (item.amenities !== null && item.amenities.includes(amenity)) {
          return true;
        }
      }

      return false;
    });
  }

}
