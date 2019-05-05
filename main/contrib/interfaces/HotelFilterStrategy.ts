import Hotel from "@app/contrib/objects/Hotel";

export default interface HotelFilterStrategy {
  filter(criteria: any): Array<Hotel>;
}
