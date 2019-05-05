import HotelBusiness from "@app/contrib/business/HotelBusiness";
import * as chai from "chai";
import Hotel from "@app/models/Hotel";

const business: HotelBusiness = new HotelBusiness();

describe("Pruebas unitarias HotelBusiness", () => {
  test("Debe responder al método findOne", () => {
    chai.expect(business).respondsTo("findOne");
  });

  test("Debe devolver un objeto Hotel al llamar al método findOne", () => {
    chai.expect(business.findOne("249942")).not.to.be.null.and.to.be.instanceof(Hotel);
  });

  test("Debe responder al método listAll", () => {
    chai.expect(business).respondsTo("listAll");
  });

  test("Debe devolver un array de Hoteles al llamar al método listAll", () => {
    chai.expect(business.listAll()).to.be.an("array").to.have.nested.property("[0]")
      .to.have.nested.include.keys(["id", "name", "stars", "price", "image", "amenities"]);
  });

  test("Debe responder al método filterByName", () => {
    chai.expect(business).respondsTo("filterByName");
  });

  test("Debe devolver un array de Hoteles al llamar al método filterByName", () => {
    chai.expect(business.filterByName("Hotel Stefanos")).to.be.an("array").to.have.nested.property("[0]")
      .to.have.nested.include.keys(["id", "name", "stars", "price", "image", "amenities"]);
  });

  test("Debe responder al método filterByStars", () => {
    chai.expect(business).respondsTo("filterByStars");
  });

  test("Debe devolver un array de Hoteles al llamar al método filterByStars", () => {
    chai.expect(business.filterByStars(3)).to.be.an("array").to.have.nested.property("[0]")
      .to.have.nested.include.keys(["id", "name", "stars", "price", "image", "amenities"]);
  });

  test("Debe responder al método filterByPrice", () => {
    chai.expect(business).respondsTo("filterByPrice");
  });

  test("Debe devolver un array de Hoteles al llamar al método filterByPrice", () => {
    chai.expect(business.filterByPrice(500)).to.be.an("array").to.have.nested.property("[0]")
      .to.have.nested.include.keys(["id", "name", "stars", "price", "image", "amenities"]);
  });

  test("Debe responder al método filterByAmenities", () => {
    chai.expect(business).respondsTo("filterByAmenities");
  });

  test("Debe devolver un array de Hoteles al llamar al método filterByAmenities", () => {
    chai.expect(business.filterByAmenities(["safety-box", "bathtub", "deep-soaking-bathtub"])).to.be.an("array").to.have.nested.property("[0]")
      .to.have.nested.include.keys(["id", "name", "stars", "price", "image", "amenities"]);
  });
});