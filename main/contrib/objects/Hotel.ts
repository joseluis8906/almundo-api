export default class Hotel {
  public id: string;
  public name: string;
  public stars: number;
  public price: number;
  public image: string;
  public amenities: Array<string>;

  constructor(id: string, name: string, stars: number, price: number, image: string, amenites: Array<string>) {
    this.id = id;
    this.name = name;
    this.stars = stars;
    this.price = price;
    this.image = image;
    this.amenities = amenites;
  }
}