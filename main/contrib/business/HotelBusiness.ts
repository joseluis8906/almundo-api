import Hotel from "@app/contrib/objects/Hotel";

const data: Hotel[] = require("@app/contrib/data/hotels.json");

export default class HotelBusiness {
  
  public listAll(): Array<Hotel> {
    return data;
  }

  public filterByName(name: string): Array<Hotel> {
    return data.filter((item: Hotel) => item.name === name);
  }

  public filterByPrice(price: number): Array<Hotel> {
    return data.filter((item: Hotel) => item.price <= price);
  }

  public filterByStars(stars: number): Array<Hotel> {
    return data.filter((item: Hotel) => item.stars === stars);
  }

  public filterByAmenities(amenities: Array<string>): Array<Hotel> {
    return data.filter((item: Hotel) => {
      for (const amenity of amenities) {
        if (item.amenities.includes(amenity)) {
          return true;
        }
      }

      return false;
    });
  }

}
