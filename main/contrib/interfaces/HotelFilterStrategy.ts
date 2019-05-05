import Hotel from "@app/models/Hotel";

export default interface HotelFilterStrategy {
  filter(criteria: any): Array<Hotel>;
}
